self.onmessage = (function() {
	CMD = {
		importLib: function(data) {
			importScripts("http://liblouis.org/js-build/build-no-tables-utf32.js");
			importScripts("liblouis-easy-api.js");
			liblouis.setLogLevel(liblouis.LOG.INFO);
			liblouis.registerLogCallback(function(lvl, msg) {
				self.postMessage({isLog: true, level: liblouis.LOG[lvl], message: msg});
			});
		},
		init: (function() {
			alreadyListed = false;
			return function(_, callback) {
				if (alreadyListed) {
					// should not happen
					return;
				}
				capi = liblouis.capi;
				tableFolder = capi.FS.createPath("/", "usr/local/share/liblouis/tables", true, true);
				httpReq = new XMLHttpRequest();
				tableIndex = "https://raw.githubusercontent.com/liblouis/liblouis/master/extra/generate-display-names/display-names";
				httpReq.open("GET", tableIndex, true);
				httpReq.onreadystatechange = function() {
					if (httpReq.readyState === 4 && (httpReq.status === 200 || httpReq.status == 0)) {
						tables = [];
						indexNames = [];
						lines = httpReq.responseText.split('\n');
						for (i = 0; i < lines.length; i++) {
							line = lines[i];
							if (line.charAt(0) === '*' || line.charAt(0) === ' ') {
								if (line.charAt(1) !== ' ') {
									continue; // ignore parse error
								}
								line = line.substring(2);
								len = line.indexOf(' ');
								if (len <= 0) {
									continue; // ignore parse error
								}
								tablePath = line.substring(0, len);
								line = line.substring(len);
								line = line.trim();
								len = line.indexOf('  ');
								if (len <= 0) {
									continue; // ignore parse error
								}
								tableIndexName = line.substring(0, len);
								tableUrl = new URL(tablePath, "http://liblouis.org/js-build/tables/_/_").href;
								tableFileName = tableUrl.substring(tableUrl.lastIndexOf('/') + 1);
								capi.FS.createLazyFile(tableFolder, tableFileName, tableUrl, true, true);
								tables.push(tableFolder + "/" + tableFileName);
								indexNames.push(tableIndexName);
							} else {
								// ignore line
							}
						}
						// this needs to come after the createLazyFile stuff because of how bindDynLoader works
						liblouis.enableOnDemandTableLoading("http://liblouis.org/js-build/tables/");
						// This takes too long, getting info from index file instead
						/*ptr = capi.ccall("lou_listTables", "number", [], []);
						if (ptr) {
							while (true) {
								table = capi.getValue(ptr, "i32");
								if (!table)
									break;
								tables.push(capi.AsciiToString(table));
								ptr += 4;
							}
						}*/
						getTableInfo = function(table, key) {
							return capi.ccall(
								"lou_getTableInfo",
								"string",
								["string", "string"],
								[table, key])
						};
						callback(
							tables.map(function(file, i) {
								return {
									indexName: indexNames[i],
									file: file
								};
							})
						);
					}
				};
				httpReq.send(null);
			};
		})(),
		getTableInfo: function(args, callback) {
			callback(getTableInfo(args.table, args.key));
		},
		translate: function(args, callback) {
			capi = liblouis.capi;
			mem = liblouis.mem;
			inbuf_ptr = mem.transfer(capi, args.input);
			inlen = mem.getBufferLength(args.input);
			outlen = inlen * 12;
			outbuf_ptr = capi._malloc(outlen);
			inlen_ptr = capi._malloc(4);
			capi.setValue(inlen_ptr, inlen, "i32");
			outlen_ptr = capi._malloc(4);
			capi.setValue(outlen_ptr, outlen, "i32");
			outputPos_ptr = capi._malloc(args.input.length * 4);
			dotsIO = 4
			ucBrl = 64;
			if (capi.ccall(
				"lou_translate",
				"number",
				["string", "number", "number", "number", "number", "number", "number", "number", "number", "number"],
				[args.table, inbuf_ptr, inlen_ptr, outbuf_ptr, outlen_ptr, null, null, outputPos_ptr, null, null, dotsIO | ucBrl]
			)) {
				outbuf = mem.read(capi, outbuf_ptr, outlen_ptr);
				inlen = capi.getValue(inlen_ptr, "i32");
				outlen = capi.getValue(outlen_ptr, "i32");
				posMapping = [];
				ptr = outputPos_ptr
				for (i = 0; i < inlen; i++) {
					posMapping.push(capi.getValue(ptr, "i32"));
					ptr += 4;
				}
				posMapping.push(outlen);
				callback({
					output: mem.buffToString(outbuf),
					posMapping: posMapping
				});
			}
			capi._free(outbuf_ptr);
			capi._free(inbuf_ptr);
			capi._free(outlen_ptr);
			capi._free(inlen_ptr);
			capi._free(outputPos_ptr);
		},
	};
	return function(event) {
		msg = event.data;
		if (!msg || !msg.cmd || !(msg.cmd in CMD))
			return;
		CMD[msg.cmd](msg.args, function(result) {
			if (msg.callback !== undefined)
				self.postMessage({callback: msg.callback, callbackData: result});
		});
	}
})();
