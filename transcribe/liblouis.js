Style = (function() {
	Style = function(style) {
		this.span = document.createElement("span");
		this.span.setAttribute("style", style);
		this.style = this.span.style;
		this.string = style;
	};
	Style.prototype.toString = function() {
		return this.string; // == this.span.getAttribute("style");
	};
	return Style;
})();

StyledString = (function() {
	StyledString = function(textSegments, styleSegments) {
		this.textSegments = textSegments;
		this.styleSegments = styleSegments;
		this.length = textSegments.reduce((collect, str) => collect + str.length, 0);
	};
	StyledString.prototype.substring = function(from, to) {
		fromSegment = 0;
		for (i = 0; i < this.textSegments.length; i++) {
			if (from < this.textSegments[i].length)
				break;
			else {
				from -= this.textSegments[i].length;
				fromSegment++;
			}
		}
		if (to === undefined) to = this.length;
		toSegment = this.textSegments.length;
		length = this.length;
		while (toSegment > 0) {
			if (to > length - this.textSegments[toSegment - 1].length) {
				to -= (length - this.textSegments[toSegment - 1].length);
				break;
			} else {
				length -= this.textSegments[toSegment - 1].length;
				toSegment--;
			}
		}
		textSegments = this.textSegments.slice(fromSegment, toSegment);
		styleSegments = this.styleSegments.slice(fromSegment, toSegment);
		if (textSegments.length > 0) {
			if (textSegments.length == 1)
				textSegments[0] = textSegments[0].substring(from, to);
			else {
				textSegments[0] = textSegments[0].substring(from);
				textSegments[textSegments.length - 1]
					= textSegments[textSegments.length - 1].substring(0, to);
			}
		}
		return new StyledString(textSegments, styleSegments);
	};
	StyledString.prototype.toString = function() {
		html = "";
		for (i = 0; i < this.textSegments.length; i++) {
			s = this.textSegments[i];
			if (this.styleSegments[i])
				s = "<span style=\"" + this.styleSegments[i] + "\">" + s + "</span>"
			html += s;
		}
		return html;
	};
	StyledString.prototype.equals = function(o) {
		if (this === o)
			return true;
		if (typeof o == "string") {
			if (this.toString() != o)
				return false;
			for (i = 0; i < this.styleSegments.length; i++)
				if (this.styleSegments[i] != null && this.styleSegments[i] != "")
					return false;
			return false;
		}
		if (this.length != o.length)
			return false;
		if (this.textSegments.length != o.textSegments.length)
			return false;
		for (i = 0; i < this.textSegments.length; i++) {
			if (this.textSegments[i] != o.textSegments[i])
				return false;
			if (this.styleSegments[i] != null) {
				if (o.styleSegments[i] != null)
					return false;
				else if (this.styleSegments[i].toString() != o.styleSegments[i].toString())
					return false;
			} else if (o.styleSegments[i] != null)
				return false;
		}
		return true;
	};
	return StyledString;
})();

louis = (function() {
	worker = null;
	// because you can not pass callbacks to worker
	callbacks = {};
	getIdForCallback = (function() {
		callbackId = 0;
		return function(callback) {
			callbacks[callbackId] = callback;
			return callbackId++;
		};
	})();
	importLib = function() {
		if (!worker) {
			worker = new Worker("liblouis-worker.js");
			worker.addEventListener("message", function(event) {
				msg = event.data;
				if (msg && msg.isLog) {
					console.log("[" + msg.level + "] " + msg.message);
					return;
				}
				if (!msg || typeof msg.callback !== "number" || typeof callbacks[msg.callback] !== "function")
					return;
				callbacks[msg.callback](msg.callbackData);
				callbacks[msg.callback] = null;
				delete callbacks[msg.callback];
			});
			worker.postMessage({cmd: "importLib"});
		}
	};
	return {
		init: function(callback) {
			importLib();
			worker.postMessage({
				cmd: "init",
				callback: getIdForCallback(function(result) {
					result.forEach(
						function(table) {
							var displayName;
							table.getDisplayName = function(callback) {
								if (displayName !== undefined)
									callback(displayName);
								else
									worker.postMessage({
										cmd: "getTableInfo",
										args: {
											table: table.file,
											key: "display-name"
										},
										callback: getIdForCallback(function(result) {
											displayName = result;
											callback(result);
										})
									});
							};
						}
					);
					callback(result);
				})
			});
		},
		translate: function(args, callback) {
			importLib();
			worker.postMessage({
				cmd: "translate",
				args: {
					table: args.table,
					input: args.input.textSegments.join('')
				},
				callback: getIdForCallback(function(result) {
					callback(result.output, function(pos) {
						inpos = pos;
						data = {
							outpos: {},
							inpos: {}
						};
						if (pos > 0 && result.posMapping[pos] == result.posMapping[pos - 1]) {
							pos--;
							while (pos > 0 && result.posMapping[pos] == result.posMapping[pos - 1]) pos--;
							data.inpos.left = pos;
							data.outpos.left = result.posMapping[pos];
							pos = inpos;
							while (pos < args.input.length && result.posMapping[pos] == result.posMapping[pos + 1]) pos++;
							if (pos < args.input.length) pos++;
							data.inpos.right = pos;
							data.outpos.right = result.posMapping[pos];
						} else {
							data.inpos.left = inpos;
							data.inpos.right = data.inpos.left;
							data.outpos.left = result.posMapping[inpos];
							data.outpos.right = data.outpos.left;
						}
						return data;
					});
				})
			});
		}
	};
})();
