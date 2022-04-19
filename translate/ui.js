document.addEventListener(
	"DOMContentLoaded",
	function() {
		// scroll text to make caret or selection visible
		scroll = function(box) {
			// size of input box including padding = 200px
			// initial scrollTop = 0
			// initial offset is top padding = 5px: always keep this
			//   value as minimum distance between caret and top
			//   border (not bottom border because line height already
			//   extends into padding)
			// line height = 32px
			caret = box.getElementsByClassName("my-caret")[0];
			if (caret)
				offset = caret.offsetTop;
			else {
				selection = box.getElementsByClassName("selection")[0];
				if (!selection)
					return;
				offset = selection.offsetTop;
			}
			if (offset + 32 > box.scrollTop + 200)
				box.scrollTop = offset + 32 - 200;
			else if (offset - 5 < box.scrollTop)
				box.scrollTop = offset - 5;
		};
		Array.prototype.sortBy = function(key) {
			this.sort(function(a, b) {
				if (a[key] < b[key])
					return -1;
				else if (a[key] > b[key])
					return 1;
				return 0;
			});
		};
		renderText = function(text, selectionStart, selectionEnd) {
			html = "";
			// normalize arguments
			[selectionStart, selectionEnd].forEach(sel => {
				if (sel.left === undefined) {
					sel.left = sel.exact;
					if (sel.left === undefined)
						sel.left = sel.right;
				}
				if (sel.right === undefined) {
					sel.right = sel.exact;
					if (sel.right === undefined)
						sel.right = sel.exact;
				}
				if (sel.exact === undefined && sel.right == sel.left)
					sel.exact = sel.left;
			});
			html += text.substring(0, selectionStart.left);
			if (!(selectionEnd.left == selectionStart.left && selectionEnd.right == selectionStart.right))
				html += "<span class='selection'>";
			if (selectionStart.right > selectionStart.left) {
				html += "<span class='contraction'>";
				if (selectionStart.exact !== undefined)
					html += text.substring(selectionStart.left, selectionStart.exact);
				else
					html += text.substring(selectionStart.left, selectionStart.right);
			}
			if (selectionStart.exact !== undefined) {
				if (selectionEnd.exact == selectionStart.exact)
					html += "<span class='my-caret'></span>";
				else if (selectionStart.right > selectionStart.left)
					html += "<span class='exact-position'></span>";
				else if (selectionEnd.left == selectionStart.exact)
					html += "<span class='exact-position'></span>";
			}
			if (selectionStart.right > selectionStart.left) {
				if (selectionStart.exact !== undefined) {
					if (selectionEnd.exact !== undefined
						&& selectionEnd.left == selectionStart.left && selectionEnd.right == selectionStart.right
						&& selectionEnd.exact !== selectionStart.exact) {
						html += text.substring(selectionStart.exact, selectionEnd.exact);
						html += "<span class='exact-position'></span>";
						html += text.substring(selectionEnd.exact, selectionStart.right);
					} else
						html += text.substring(selectionStart.exact, selectionStart.right);
				}
				html += "</span>"; // contraction
			}
			if (!(selectionEnd.left == selectionStart.left && selectionEnd.right == selectionStart.right)) {
				html += text.substring(selectionStart.right, selectionEnd.left);
				if (selectionEnd.right > selectionEnd.left) {
					html += "<span class='contraction'>";
					if (selectionEnd.exact !== undefined) {
						html += text.substring(selectionEnd.left, selectionEnd.exact);
						html += "<span class='exact-position'></span>";
						html += text.substring(selectionEnd.exact, selectionEnd.right);
					} else
						html += text.substring(selectionEnd.left, selectionEnd.right);
					html += "</span>"; // contraction
				} else if (selectionEnd.exact == selectionStart.right)
					html += "<span class='exact-position'></span>";
				html += "</span>"; // selection
			}
			html += text.substring(selectionEnd.right);
			html = html.replace(/⠀/g, ' ');
			return html;
		};
		availableTables = [];
		selectedTableIndex = -1;
		toBraille = (function() {
			currentText = "";
			currentBraille = "";
			currentTable = null;
			currentPosMapping = null;
			renderCurrent = function(selectionStart, selectionEnd, inputCallback, outputCallback) {
				exactTextSelectionStart = selectionStart;
				exactTextSelectionEnd = selectionEnd;
				selectionStart = currentPosMapping(selectionStart);
				selectionEnd = currentPosMapping(selectionEnd);
				textSelectionStart = selectionStart.inpos;
				textSelectionStart.exact = exactTextSelectionStart;
				textSelectionEnd = selectionEnd.inpos;
				textSelectionEnd.exact = exactTextSelectionEnd;
				brailleSelectionStart = selectionStart.outpos;
				brailleSelectionEnd = selectionEnd.outpos;
				outputCallback(renderText(currentBraille, brailleSelectionStart, brailleSelectionEnd));
				inputCallback(renderText(currentText, textSelectionStart, textSelectionEnd));
			};
			return function(text, selectionStart, selectionEnd, inputCallback, outputCallback) {
				// don't update output field until a table is selected
				if (selectedTableIndex == -1) {
					inputCallback(renderText(styledInput,
											 { exact: selectionStart },
											 { exact: selectionEnd }));
					return;
				}
				table = availableTables[selectedTableIndex];
				if (text.equals(currentText) && table == currentTable) {
					renderCurrent(selectionStart, selectionEnd, inputCallback, outputCallback);
					return;
				}
				louis.translate({
					table: table.file,
					input: text
				}, function(output, posMapping) {
					currentText = text;
					currentTable = table;
					currentBraille = ""; {
						inpos = 0;
						outpos = 0;
						text.textSegments.join('').split(/\n/).forEach(line => {
							inpos += line.length;
							if (inpos < text.length) {
								newlineOutpos = posMapping(inpos).outpos;
								afterNewlineOutpos = posMapping(inpos + 1).outpos;
								if (newlineOutpos.left == newlineOutpos.right
									&& afterNewlineOutpos.left == afterNewlineOutpos.right
									&& output.substring(newlineOutpos.left, afterNewlineOutpos.left) == "⠀") {
									currentBraille += output.substring(outpos, newlineOutpos.left);
									currentBraille += '\n';
									outpos = afterNewlineOutpos.left;
								}
							}
							inpos += 1;
						});
						currentBraille += output.substring(outpos, output.length);
					}
					currentPosMapping = posMapping;
					renderCurrent(selectionStart, selectionEnd, inputCallback, outputCallback);
				});
			}
		})();
		inputField = (function(wrapperElement) {
			textareaElement = wrapperElement.getElementsByTagName("textarea")[0];
			// create custom textarea view
			customElement = wrapperElement.appendChild(document.createElement("div")); {
				customElement.setAttribute("id", "input");
				customElement.setAttribute("aria-hidden", "true");
				customElement.setAttribute("class", "initial-state");
			}
			// mark input box as focused when underlying textarea is focused
			textareaElement.addEventListener(
				"focusin",
				function() {
					customElement.classList.add("focus");
				},
				true);
			textareaElement.addEventListener(
				"focusout",
				function(event) {
					customElement.classList.remove("focus");
				},
				true);
			onChangeListeners = [];
			onFocusChangeListeners = [];
			object = {
				get value() {
					return textareaElement.value;
				},
				get selectionStart() {
					return textareaElement.selectionStart;
				},
				get selectionEnd() {
					return textareaElement.selectionEnd;
				},
				set innerHTML(value) {
					customElement.innerHTML = value;
				},
				focus: function() {
					textareaElement.focus()
				},
				scroll: function() {
					scroll(customElement);
				},
				onChange: function(callback) {
					onChangeListeners.push(callback);
				},
				onFocusChange: function(callback) {
					onFocusChangeListeners.push(callback);
				}
			};
			initialState = true;
			notifyOnChangeListeners = function() {
				if (initialState && textareaElement.value !== "") {
					initialState = false;
					customElement.classList.remove("initial-state");
				}
				onChangeListeners.forEach(f => f(object));
			};
			// need to listen to all keys in order to support left, right, up, down, ctrl-a, ctrl-e, ctrl-d, copy, paste, etc.
			textareaElement.addEventListener("keyup", notifyOnChangeListeners, true);
			textareaElement.addEventListener(
				"focusin",
				function() {
					onFocusChangeListeners.forEach(f => f(object, true));
				},
				true);
			textareaElement.addEventListener(
				"focusout",
				function() {
					onFocusChangeListeners.forEach(f => f(object, false));
				},
				true);
			// update caret or selection of input and output according to mouse events
			observeMouseSelection = (function() {
				isDescendantOf = function(node, ancestor) {
					while (node) {
						node = node.parentNode;
						if (node && node === ancestor)
							return true;
					}
					return false;
				};
				startOffset = function(node) {
					offset = 0;
					while (node && node !== customElement) {
						if (node.previousSibling) {
							node = node.previousSibling;
							if (node.textContent)
								offset += node.textContent.length;
						} else
							node = node.parentNode;
					}
					return offset;
				};
				return function() {
					selection = window.getSelection();
					if (isDescendantOf(selection.anchorNode, customElement)
						&& isDescendantOf(selection.focusNode, customElement)) {
						start = selection.anchorOffset + startOffset(selection.anchorNode);
						end = selection.focusOffset + startOffset(selection.focusNode);
						if (start < end)
							textareaElement.setSelectionRange(start, end);
						else
							textareaElement.setSelectionRange(end, start);
						notifyOnChangeListeners();
					}
					// move focus back to textarea because mouse click moved it
					textareaElement.focus();
				};
			})();
			customElement.addEventListener("mouseup", observeMouseSelection, true);
			return object;
		})(document.getElementById("input-wrapper"));
		outputField = document.getElementById("output");
		// update input and output fields, including caret or selection, according to keyboard events
		updateInputAndOutput = function() {
			styledInput = new StyledString([inputField.value], [new Style("")]);
			inputField.scroll();
			toBraille(
				styledInput,
				inputField.selectionStart,
				inputField.selectionEnd,
				text => {
					inputField.innerHTML = text;
					inputField.scroll();
				},
				braille => {
					outputField.innerHTML = braille;
					if (outputField.textContent)
						outputField.classList.remove("empty");
					else
						outputField.classList.add("empty");
					scroll(outputField);
				}
			);
		};
		inputField.onChange(updateInputAndOutput);
		inputField.onFocusChange(function(_, focusin) {
			if (focusin)
				outputField.classList.add("input-has-focus");
			else
				outputField.classList.remove("input-has-focus");
		});
		louis.init((function() {
			tableSelect = (function(wrapperElement) {
				selectElement = wrapperElement.getElementsByTagName("select")[0];
				options = [];
				optionCallbacks = [];
				options.push = function(value, onSelect) {
					option = document.createElement("option");
					option.innerHTML = value;
					selectElement.appendChild(option);
					Array.prototype.push.call(this, option);
					optionCallbacks.push(onSelect);
					return option;
				}
				selectElement.addEventListener("change", function(event) {
					optionCallbacks[selectElement.selectedIndex - 1]();
				});
				return {
					options: options,
					enable: function() {
						selectElement.removeAttribute("disabled");
					},
					focus: function() {
						selectElement.focus();
					},
					select: function(index) {
						selectElement.selectedIndex = index + 1;
					}
				};
			})(document.getElementById("table-select-wrapper"));
			return function(tables) {
				availableTables = tables;
				lastTable = (function() {
					cookies = document.cookie.split(';');
					for (i = 0; i < cookies.length; i++) {
						c = cookies[i];
						while (c.charAt(0) == ' ')
							c = c.substring(1);
						if (c.indexOf("liblouis-table=") == 0)
							return c.substring("liblouis-table=".length);
					}
				})();
				availableTables.sortBy("indexName");
				selectTable = function(index) {
					if (index < 0)
						// should not happen
						return null;
					selectedTableIndex = index;
					outputField.classList.remove("initial-state"); // remove "No table selected"
					table = availableTables[index];
					tableSelect.select(index);
					updateInputAndOutput();
					inputField.focus();
					return table;
				};
				availableTables.forEach(function(table, i) {
					tableSelect.options.push(
						table.indexName,
						function() {
							table = selectTable(i);
							// remember last choice; expires when browser is closed
							document.cookie = "liblouis-table=" + table.file + "; SameSite=Strict";
						}
					);
					if (lastTable == table.file)
						selectTable(i);
				});
				tableSelect.enable();
				if (selectedTableIndex == -1)
					tableSelect.focus();
			};
		})());
	}
);
