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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -moz-box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1.5em;\\n}\\n\\n.boards {\\n  display: flex;\\n  gap: 50px;\\n  flex-direction: column;\\n  width: 80vw;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 0 auto;\\n}\\n@media screen and (min-width: 1024px) {\\n  .boards {\\n    flex-direction: row;\\n  }\\n}\\n\\n.board {\\n  flex: 1;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.gameboard {\\n  display: grid;\\n  grid-template-columns: repeat(10, minmax(20px, 4vw));\\n  grid-template-rows: repeat(10, minmax(20px, 4vw));\\n  background-color: rgb(193, 211, 243);\\n}\\n.gameboard div {\\n  height: 100%;\\n  width: 100%;\\n  outline: 1px dashed rgb(83, 95, 117);\\n  cursor: pointer;\\n}\\n.gameboard div div:hover {\\n  opacity: 0.2;\\n}\\n\\n.ship:hover, .miss:hover, .hit:hover {\\n  opacity: 0.2;\\n}\\n\\n.ship {\\n  z-index: 100;\\n  background-color: blue;\\n}\\n\\n.hit {\\n  z-index: 100;\\n  background-color: red;\\n}\\n\\n.miss {\\n  z-index: 100;\\n  background-color: yellow;\\n}\\n\\narticle {\\n  width: 80vw;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n}\\narticle .ship {\\n  display: flex;\\n  background-color: transparent;\\n}\\narticle .used .square {\\n  background-color: rgb(61, 55, 55);\\n  outline: 1px dashed rgb(61, 55, 55);\\n}\\narticle .square {\\n  height: 30px;\\n  width: 30px;\\n  background-color: rgb(193, 211, 243);\\n  outline: 1px dashed rgb(83, 95, 117);\\n}\\narticle .selected .square {\\n  background-color: purple;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players */ \"./src/scripts/Players.js\");\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Players__WEBPACK_IMPORTED_MODULE_0__);\n\nconst game = () => {\n\n    const form = document.querySelector('form'); \n    const formBtn = document.querySelector('form button'); \n    const playerControl = _Players__WEBPACK_IMPORTED_MODULE_0___default()();         \n    let currentShip;\n    let ships;\n\n    // new game\n    const newGame = (e) => {\n        console.log('form submitted!'); \n        e.preventDefault(); //Stop the form refreshing; \n        playerControl.createPlayer(form.querySelector('input').value);  \n        form.querySelector('input').value = ''; \n        createBoard(); \n        showShips(); \n        placeShips(); \n    }\n\n    const createBoard = () => {\n        let boards = document.querySelectorAll('.board'); \n\n        boards.forEach((board, key) => {\n            console.log(\"key\", key);\n            board.innerHTML = ''; \n            const container = document.createElement('div'); \n            for (let i = 0; i <= 9; i++){\n                const row = document.createElement('div');\n                for(let j = 0; j <= 9; j++) {\n                    const cell = document.createElement('div'); \n                    cell.setAttribute('data-x', i); \n                    cell.setAttribute('data-y', j); \n                    cell.setAttribute('data-key', key);\n                    if (key == 1) {\n                        // event listener?\n                        cell.addEventListener('click', function(){\n                            attack(i, j)\n                        })\n                    }\n                    row.append(cell); \n                }\n                container.append(row);\n            }\n            container.className = 'gameboard'; \n            board.append(container);\n        })\n    }\n\n    function showShips() {\n        let main = document.querySelector('main'); \n        const shipsContainer = document.createElement('article'); \n        const ships = [4,4,2,2,1,1,1]; \n        for(let i = 0; i < ships.length; i++) {\n            const div = document.createElement('div'); \n            for (let j = 0; j < ships[i]; j++) {\n                let square = document.createElement('div'); \n                square.className = 'square'; \n                div.append(square); \n            }\n            div.className = `ship ship${ships[i]}`; \n            div.setAttribute('data-length', ships[i]); \n            shipsContainer.append(div); \n        }\n        // shipsContainer.insertAdjacentElement(\"beforeend\")\n        main.insertAdjacentElement(\"afterend\",shipsContainer); \n    }\n\n    // randomly place ships (this is just for now)\n    function placeShipsAI() {\n        const ships = [4,4,2,2,1,1,1]; \n    }\n\n\n\n    function placeShipOnClick() {\n        // remove selected from all other ships;\n        ships.forEach(ship => ship.classList.remove('selected')); \n        currentShip = this; \n        this.classList.add('selected'); \n    }\n\n    const placeShips = () => {\n        let players = playerControl.getPlayers(); \n        ships = document.querySelectorAll('article .ship'); \n        console.log(ships); \n\n        ships.forEach(ship => {\n            ship.addEventListener('click', placeShipOnClick.bind(ship), {once: true})\n        })\n\n\n        const playerBoard = document.querySelector('.board1 .gameboard'); \n        console.log(playerBoard); \n        for (let i = 0; i <= 9; i++) {\n            for(let j = 0; j <= 9; j++) {\n                let cell = document.querySelector(`[data-key='0'][data-x='${i}'][data-y='${j}']`); \n                cell.addEventListener('click', function() {\n                    if (cell.classList.contains('ship')) {\n                        alert(`can't place ship here`); \n                    }\n                    if (currentShip != null & !cell.classList.contains('ship')) {\n                        console.log(\"place ship\"); \n                        let len = currentShip.getAttribute('data-length');\n                        players[0].gameboard.placeShip(i, j, len); \n                        currentShip.classList.remove('selected'); \n                        currentShip.classList.add('used'); \n                        // currentShip.removeEventListener('click', placeShipOnClick.bind(currentShip)); \n                        currentShip = null;\n                        for(let k = 0; k < len; k++) {\n                            document.querySelector(`[data-key='0'][data-x='${i+k}'][data-y='${j}']`).classList.add('ship');\n                        } \n                    }\n                })\n            }\n        }\n    };\n\n    // check winner\n\n\n\n\n    // attack\n    function attack(i, j) {\n        let { status, aiStatus, xAi, yAi }= playerControl.attack(i, j); \n        if (status == 'hit') {\n            document.querySelector(`[data-key='1'][data-x='${i}'][data-y='${j}']`).classList.add('hit'); \n            console.log(\"check\", document.querySelector(`[data-key='1'][data-x='${i}'][data-y='${j}']`)); \n        } else if (status == 'miss') {\n            document.querySelector(`[data-key='1'][data-x='${i}'][data-y='${j}']`).classList.add('miss'); \n        }\n\n        // update aiAttack\n        if (aiStatus == 'hit') {\n            document.querySelector(`[data-key='0'][data-x='${xAi}'][data-y='${yAi}']`).classList.add('hit'); \n            console.log(\"check\", document.querySelector(`[data-key='0'][data-x='${i}'][data-y='${j}']`)); \n        } else if (aiStatus == 'miss') {\n            document.querySelector(`[data-key='0'][data-x='${xAi}'][data-y='${yAi}']`).classList.add('miss'); \n            console.log(\"check\", document.querySelector(`[data-key='0'][data-x='${xAi}'][data-y='${yAi}']`)); \n        }\n    }\n\n    form.addEventListener('submit', newGame); \n    formBtn.addEventListener('click', newGame); \n    \n}; \ngame(); \n\n//# sourceURL=webpack://top-battleship/./src/scripts/Game.js?");

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

eval("const ship = (len) => {\n    let position = Array(len).fill(0); \n    const getPosition = () => position;\n    const hit = (num) => {position[num] = 1; }\n    const isHit = () => {\n        return position.indexOf(1) == -1 ? false : true\n    }\n    const isSunk = () => {\n        return position.every(pos => pos === 1);\n    }\n\n    return {\n        length: len, \n        hit, \n        isSunk,\n        isHit,\n        getPosition\n    }\n}\n\nmodule.exports = ship;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/ship.js?");

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