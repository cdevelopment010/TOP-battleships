/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto:ital,wght@0,400;0,700;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -moz-box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 1.5em;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  background-color: #000000;\\n  color: white;\\n}\\n\\nfooter {\\n  min-height: 10vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  background-color: #252427;\\n}\\n\\n.page {\\n  min-height: 80vh;\\n  height: 100%;\\n  padding-top: 10vh;\\n  display: grid;\\n}\\n\\na {\\n  color: inherit;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\nform button {\\n  align-self: flex-end;\\n}\\n\\nbutton {\\n  padding: 0px 25px;\\n  border-radius: 2px;\\n  outline: none;\\n  border: 1px solid transparent;\\n  cursor: pointer;\\n}\\n\\nh1 {\\n  font-family: \\\"Black Ops One\\\", cursive;\\n  font-size: 3rem;\\n  letter-spacing: 0.2em;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\ncanvas {\\n  background-color: #656370;\\n  cursor: pointer;\\n}\\n\\n.boards {\\n  display: flex;\\n  gap: 50px;\\n  flex-direction: column;\\n  width: 80vw;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 0 auto;\\n}\\n@media screen and (min-width: 1024px) {\\n  .boards {\\n    flex-direction: row;\\n  }\\n}\\n\\n.gameboard {\\n  display: grid;\\n  grid-template-columns: repeat(10, minmax(20px, 4vw));\\n  grid-template-rows: repeat(10, minmax(20px, 4vw));\\n  background-color: #FFFFFF;\\n}\\n.gameboard div {\\n  height: 100%;\\n  width: 100%;\\n  cursor: pointer;\\n}\\n.gameboard div div:hover {\\n  opacity: 0.2;\\n}\\n\\n.ship:hover, .miss:hover, .hit:hover {\\n  opacity: 0.2;\\n}\\n\\n.ship {\\n  z-index: 100;\\n  background-color: blue;\\n}\\n\\n.hit {\\n  z-index: 100;\\n  background-color: red;\\n}\\n\\n.miss {\\n  z-index: 100;\\n  background-color: yellow;\\n}\\n\\narticle {\\n  width: 80vw;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n}\\narticle .ship {\\n  display: flex;\\n  background-color: transparent;\\n}\\narticle .used .square {\\n  background-color: rgb(61, 55, 55);\\n  outline: 1px dashed rgb(61, 55, 55);\\n}\\narticle .square {\\n  height: 30px;\\n  width: 30px;\\n  background-color: #FFFFFF;\\n}\\narticle .selected .square {\\n  background-color: purple;\\n}\\n\\n.btn-primary {\\n  background-color: #12F529;\\n  color: #000000;\\n}\\n.btn-primary:hover {\\n  color: #FFFFFF;\\n}\\n\\n.ship-container {\\n  display: flex;\\n}\\n.ship-container.vertical {\\n  flex-direction: column;\\n}\\n.ship-container .square {\\n  height: 50px;\\n  width: 50px;\\n  background-color: #8981BA;\\n  border: 1px dashed white;\\n}\\n\\n.page2 .container {\\n  margin-top: 20px;\\n  display: grid;\\n  gap: 20px;\\n}\\n\\n.dragging {\\n  opacity: 0.5;\\n}\\n\\nfooter li {\\n  list-style-type: none;\\n  font-size: 2em;\\n}\\nfooter li:hover {\\n  color: #78777C;\\n}\\nfooter ul {\\n  display: flex;\\n  gap: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Game */ \"./src/scripts/Game.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n \n\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players */ \"./src/scripts/Players.js\");\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Players__WEBPACK_IMPORTED_MODULE_0__);\n\nconst game = (() => {\n    const playerControl = _Players__WEBPACK_IMPORTED_MODULE_0___default()();      \n    let usernameBtn = document.getElementById('btn-username');\n    let username = document.getElementById('username'); \n    const gridPopulated = []; //use this to check coords of ship placement and to place on gameboard before screen 3; \n\n    usernameBtn.addEventListener('click', startGame); \n\n\n\n    function validateUsername() {\n        let pass = true; \n        if (username.value.length == 0) {\n            alert('must input a username'); \n            pass = false;\n        }\n        if (username.value.length < 3){\n            alert('username must be greater than 3'); \n            pass=false;\n        }\n\n        return pass; \n    }\n\n    //need to split this out into different functions\n    function startGame() {\n        console.log('btn clicked'); \n        let usernamePass = validateUsername(); \n        if (!usernamePass) {\n            return; \n        }\n        //create player \n        playerControl.createPlayer(username.value); \n        console.log(\"players:\", playerControl.getPlayers()[0].gameboard); \n\n        // go to second screen; \n        let page1 = document.querySelector('.page1');\n        let page2 = document.querySelector('.page2');\n\n        page1.classList.add('hidden'); \n        page2.classList.remove('hidden'); \n        generateShips(); \n        let canvas = styleCanvas('.page2'); \n        // canvas.addEventListener('click', function( e ) {\n        //     let x = Math.floor(e.offsetX / 50); \n        //     let y = Math.floor(e.offsetY / 50); \n        //     console.log(\"x:\", x); \n        //     console.log(\"y:\", y); \n        // })\n\n        \n    }\n\n\n    function dropShip(x, y, size, canvas, direction) {\n        console.log('drop ship')\n        const ctx = canvas.getContext(\"2d\")\n        for (let i = 0; i < size; i++) {\n            ctx.beginPath(); \n            if (direction === 'vertical') {\n                ctx.rect(x, y+(50*i), 50, 50); \n            } else {\n                ctx.rect(x+(50*i), y, 50, 50); \n            }\n            ctx.strokeStyle = 'white'; \n            ctx.setLineDash([2]);\n            ctx.lineWidth = 2; \n            ctx.stroke(); \n            ctx.fillStyle = '#8981BA'\n            ctx.fill();\n        }\n    }\n\n    function generateShips() {\n        let ships = [5,4,3,3,2]; \n        let shipContainer = document.querySelectorAll('.page2 .ship-container'); \n        console.log(shipContainer); \n        for(let i = 0; i < ships.length; i++) {\n            for (let j = 0; j < ships[i]; j++) {\n                const square = document.createElement('div'); \n                square.classList.add('square'); \n                shipContainer[i].append(square); \n            }\n        }\n        shipContainer.forEach(container => {\n            container.draggable = true; \n            container.classList.add('draggable'); \n            container.addEventListener('click', () => {\n                container.classList.toggle('vertical'); \n            })\n        })\n        manageDrag(); \n    }\n\n    function populateGrid(x, y, size, direction) {\n        let grid = []\n        for (let i = 0; i < size; i++) {\n            if (direction === 'vertical') {\n                grid.push([x,y+i]) \n            } else {\n                grid.push([x+i,y]) \n            }\n        }\n\n        return grid; \n    }\n\n    function manageDrag() {\n        let draggables = document.querySelectorAll('.draggable'); \n        let canvas = document.querySelector('.page2 canvas'); \n        let x = 0, y = 0; \n\n        canvas.addEventListener('dragover', ( e ) => {\n            e.preventDefault(); \n            console.log('drag over'); \n            x = Math.floor(e.offsetX / 50) * 50; \n            y = Math.floor(e.offsetY / 50) * 50; \n        })\n        draggables.forEach(draggable => {\n            draggable.addEventListener('dragstart', () => {\n                console.log('drag start'); \n                //add class to tell we are currently dragging\n                draggable.classList.add('dragging'); \n            })\n\n            draggable.addEventListener('dragend', () => {\n                console.log('drag end'); \n                //add class to tell we are currently dragging\n                draggable.classList.remove('dragging'); \n                let canvas = document.querySelector('.page2 canvas'); \n                let direction = draggable.classList.contains('vertical') ? 'vertical' : 'horizontal'; \n                let size = draggable.childElementCount; \n                dropShip(x, y, size, canvas, direction); \n                let populated = populateGrid(x / 50, y/50, size, direction);\n                gridPopulated.push(populated);  \n                draggable.innerHTML = ''; \n\n            })\n        })\n    }\n\n\n    function styleCanvas(loc) {\n        let canvas = document.querySelector(`${loc} canvas`); \n        let ctx = canvas.getContext(\"2d\"); \n        console.log(canvas); \n        canvas.height = '500';\n        canvas.width = '500';\n\n        for (let i = 0; i <=9; i++){\n            //columns\n            ctx.moveTo(i*50, 0); \n            ctx.beginPath(); \n            ctx.rect(i*50, 0, 50, 500); \n            ctx.strokeStyle = 'white'; \n            ctx.setLineDash([10]);\n            ctx.stroke();\n\n            //rows\n            ctx.beginPath(); \n            ctx.rect(0,i*50, 500, 50); \n            ctx.strokeStyle = 'white'; \n            ctx.setLineDash([10]);\n            ctx.stroke();\n        }\n        return canvas; \n    }\n})(); \n\n//# sourceURL=webpack://top-battleship/./src/scripts/Game.js?");

/***/ }),

/***/ "./src/scripts/Gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/Gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("//import ship from \"./ship\";//jest doesn't like import\nconst ship = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\nconst Gameboard = () => {\n\n    // Create 10x10 grid\n    //NOTE: I may make this adjustable in the future?\n    let board = Array(10).fill(null).map(x => Array(10).fill(null)); \n    const getBoard = () => board;\n    const ships = []\n\n\n\n    const getShips = () => ships;\n\n    //placeShip\n\n    const placeShip = (x, y, len) => {\n        let shipToPlace = ship(len); \n        let coords = [];\n        for (let i = 0; i < len; i++) {\n            board[x][y] = 'SHIP';\n            coords.push([x, y]); \n            y++;\n        }\n        ships.push({coords, shipToPlace}); \n    }\n\n    //ReceiveAttack \n    const receiveAttack = (x,y) => {\n        let status = 'miss'; \n        let coordIndex = -1; \n        let shipIndex = -1;\n        // check if it hasn't already been in that spot\n        if (board[x][y] == 'hit' || board[x][y] == 'miss') {\n            console.log('try again...'); \n            return; \n        }\n        // check if that spot contains a ship\n        if (board[x][y] == null) {\n            console.log('miss'); \n        } else {\n            console.log('hit'); \n            status = 'hit'; \n            for(let i = 0; i < ships.length; i++) {\n                for(let j = 0; j < ships[i].coords.length; j++){\n                    if (JSON.stringify([x, y])==JSON.stringify(ships[i].coords[j])) {\n                        coordIndex = j;\n                        shipIndex = i;\n                        board[x][y] = 'hit'; \n                    }\n                }\n            }\n        \n        }\n\n\n        if (coordIndex != -1 && shipIndex != -1) {\n            ships[shipIndex].shipToPlace.hit(coordIndex); \n            // will need to add check for game over & sunk\n        }\n\n        return status; \n    }\n\n\n    const gameover = () => {\n        // check if each ship has been sunk\n        return ships.every(ship => ship.shipToPlace.isSunk());\n    }\n\n\n    \n\n    return {getBoard, placeShip, receiveAttack, gameover, getShips}\n}\n\n\nmodule.exports = Gameboard; \n\n//# sourceURL=webpack://top-battleship/./src/scripts/Gameboard.js?");

/***/ }),

/***/ "./src/scripts/Players.js":
/*!********************************!*\
  !*** ./src/scripts/Players.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/scripts/Gameboard.js\");\n// import Gameboard from \"./Gameboard\";\n\nconst Players = (name) => {\n    return name;\n}\n\n\nconst playerController = () => {\n\n    let player1; \n    let player1Gameboard = Gameboard();\n    let player2 = Players('AI');\n    let player2Gameboard = Gameboard();\n    let players;  \n    let currentPlayer = 0; \n    let opponent = (currentPlayer + 1) % 2; \n\n    const createPlayer = (name) => {\n        player1 = Players(name); \n        players = [{player: player1, gameboard: player1Gameboard}, {player: player2, gameboard: player2Gameboard} ];\n        console.log(players); \n    }\n\n    const getPlayers = () => {return players} ; \n    const updatePlayer = () => {\n        currentPlayer = (currentPlayer + 1) % 2; \n        opponent = (currentPlayer + 1) % 2;\n    } \n    const getCurrentPlayer = () => currentPlayer; \n    const checkWinner = () => {\n        return players[opponent].gameboard.gameover() == true ? true : false\n    }; \n    const randomAIMove = () => {\n        let validCoords = false;\n        let status; \n        let x = Math.floor(Math.random()*10); \n        let y = Math.floor(Math.random()*10); \n        // pause for one second \n        // setTimeout(()=> {\n            while (!validCoords) {\n                if(players[0].gameboard.getBoard()[x][y] == 'hit' | players[0].gameboard.getBoard()[x][y] == 'miss') {\n                    console.log('try again AI...'); \n                    x = Math.floor(Math.random()*10); \n                    y = Math.floor(Math.random()*10); \n                } else {\n                    validCoords = true;\n                }\n            }\n            console.log(\"random AI coords\",x, y); \n            status = players[0].gameboard.receiveAttack(x, y); \n            updatePlayer(); \n            return {aiStatus: status, xAi: x, yAi: y}; \n        // }, 1000)\n        // update player turn \n\n    }\n\n    const attack = (x, y) => {\n        let validCoords = false;\n        let status;\n        if(players[opponent].gameboard.getBoard()[x][y] == 'hit' | players[opponent].gameboard.getBoard()[x][y] == 'miss') {\n            //try again - coordinates aren't valid;\n            console.log(`Try again! You have already attacked this spot ${x}, ${y}`); \n        } else {\n            validCoords = true; \n            status = players[opponent].gameboard.receiveAttack(x, y);\n            // update player\n            updatePlayer(); \n            // AI turn\n            let { aiStatus, xAi, yAi } = randomAIMove(); \n            console.log(\"player attack aiStatus\",aiStatus)\n            return {status, aiStatus, xAi, yAi};\n        }\n    }\n\n    const showBoards = () => {\n        console.log('playerBoard');\n        console.table(players[0].gameboard.getBoard());\n        console.log('AIBoard');\n        console.table(players[1].gameboard.getBoard());\n    }\n\n    return {\n        updatePlayer, \n        getCurrentPlayer, \n        randomAIMove, \n        checkWinner, \n        attack, \n        showBoards, \n        createPlayer, \n        getPlayers\n    }\n\n}\n\n\nmodule.exports = playerController; \n\n//# sourceURL=webpack://top-battleship/./src/scripts/Players.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("const ship = (len) => {\n    let position = Array(len).fill(0); \n    let direction = 1; //1 is horizontal, 0 is vertical\n    const getPosition = () => position;\n    const hit = (num) => {position[num] = 1; }\n    const isHit = () => {\n        return position.indexOf(1) == -1 ? false : true\n    }\n    const isSunk = () => {\n        return position.every(pos => pos === 1);\n    }\n    const getDirection = () => direction; \n    const updateDirection = () => {\n        direction = (direction + 1) % 2;\n    }\n\n    return {\n        length: len, \n        hit, \n        isSunk,\n        isHit,\n        getPosition, \n        getDirection,\n        updateDirection\n    }\n}\n\nmodule.exports = ship;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;