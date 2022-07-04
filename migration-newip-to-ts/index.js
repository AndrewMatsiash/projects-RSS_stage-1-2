/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".news{\\n    height: 100vh;\\n    overflow: auto;\\n}\\n\\n.news__item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 0.5rem auto;\\n    margin-bottom: 1.6%;\\n    background: #fff;\\n    color: #333;\\n    line-height: 1.4;\\n    font-family: Arial, sans-serif;\\n    border-radius: 5px;\\n    overflow: hidden;\\n}\\n\\n.news__item:hover .news__meta-photo {\\n    transform: scale(1.3) rotate(3deg);\\n}\\n\\n.news__item .news__meta {\\n    position: relative;\\n    height: 200px;\\n}\\n\\n.news__item .news__meta-photo {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    background-size: cover;\\n    background-position: center;\\n    transition: transform 0.2s;\\n}\\n\\n.news__item .news__meta-details,\\n.news__item .news__meta-details ul {\\n    margin: auto;\\n    padding: 0;\\n    list-style: none;\\n}\\n\\n.news__item .news__meta-details {\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: -120%;\\n    margin: auto;\\n    transition: left 0.2s;\\n    background: rgba(0, 0, 0, 0.6);\\n    color: #fff;\\n    padding: 10px;\\n    width: 100%;\\n    font-size: 0.9rem;\\n}\\n\\n.news__item .news__description {\\n    padding: 1rem;\\n    background: #fff;\\n    position: relative;\\n    z-index: 1;\\n}\\n\\n.news__item .news__description h2 {\\n    line-height: 1;\\n    margin: 0;\\n    font-size: 1.7rem;\\n}\\n\\n.news__item .news__description h3 {\\n    font-size: 1rem;\\n    font-weight: 300;\\n    text-transform: uppercase;\\n    color: #a2a2a2;\\n    margin-top: 5px;\\n}\\n\\n.news__item .news__description .news__read-more {\\n    text-align: right;\\n}\\n\\n.news__item .news__description .news__read-more a {\\n    color: #5ad67d;\\n    display: inline-block;\\n    position: relative;\\n    text-decoration: none;\\n    font-weight: 800;\\n}\\n\\n.news__item .news__description .news__read-more a:after {\\n    content: '→';\\n    margin-left: -10px;\\n    opacity: 0;\\n    vertical-align: middle;\\n    transition: margin 0.3s, opacity 0.3s;\\n}\\n\\n.news__item .news__description .news__read-more a:hover:after {\\n    margin-left: 5px;\\n    opacity: 1;\\n}\\n\\n.news__item p {\\n    margin: 1rem 0 0;\\n}\\n\\n.news__item p:first-of-type {\\n    margin-top: 1.25rem;\\n    position: relative;\\n}\\n\\n.news__item p:first-of-type:before {\\n    content: '';\\n    position: absolute;\\n    height: 5px;\\n    background: #5ad67d;\\n    width: 35px;\\n    top: -0.75rem;\\n    border-radius: 3px;\\n}\\n\\n.news__item:hover .news__meta-details {\\n    left: 0%;\\n}\\n\\n@media (min-width: 640px) {\\n    .news__item {\\n        flex-direction: row;\\n        max-width: 700px;\\n    }\\n\\n    .news__item .news__meta {\\n        flex-basis: 40%;\\n        height: auto;\\n    }\\n\\n    .news__item .news__description {\\n        flex-basis: 60%;\\n    }\\n\\n    .news__item .news__description:before {\\n        -webkit-transform: skewX(-3deg);\\n        transform: skewX(-3deg);\\n        content: '';\\n        background: #fff;\\n        width: 30px;\\n        position: absolute;\\n        left: -10px;\\n        top: 0;\\n        bottom: 0;\\n        z-index: -1;\\n    }\\n\\n    .news__item.alt {\\n        flex-direction: row-reverse;\\n    }\\n\\n    .news__item.alt .news__description:before {\\n        left: inherit;\\n        right: -10px;\\n        -webkit-transform: skew(3deg);\\n        transform: skew(3deg);\\n    }\\n\\n    .news__item.alt .news__meta-details {\\n        padding-left: 25px;\\n    }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://NewsJS/./src/components/view/news/news.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".sources {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    max-width: 100%;\\n    height: 100vh;\\n    overflow: auto;\\n    font: 300 1em 'Fira Sans', sans-serif;\\n}\\n\\n.source__item {\\n    background: none;\\n    border: 2px solid #30c5ff;\\n    font: inherit;\\n    line-height: 1;\\n    margin: 0.2em;\\n    padding: 1em 2em;\\n    color: #70d6ff;\\n    transition: 0.25s;\\n    cursor: pointer;\\n}\\n\\n.source__item:hover,\\n.source__item:focus {\\n    border-color: #3fcc59;\\n    color: #69db7e;\\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\\n    transform: translateY(-0.25em);\\n}\\n\\n.source__item-name {\\n    font-weight: 400;\\n    white-space: nowrap;\\n}\\n\\n@media (max-width: 1500px) {\\n    .sources {\\n\\n        grid-template-columns: 1fr 1fr;\\n    }\\n}\\n\\n@media (max-width: 1230px) {\\n    .sources {\\n        display: grid;\\n        grid-template-columns: 1fr;\\n    }\\n}\\n\\n@media (max-width: 900px) {\\n    .sources {\\n        grid-template-columns: repeat(2, 1fr);\\n        height: 19vh;\\n    }\\n}\\n\\n@media (max-width: 588px) {\\n    .sources {\\n        grid-template-columns: repeat(1, 1fr);\\n        height: 19vh;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://NewsJS/./src/components/view/sources/sources.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_rss_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/rss.svg */ \"./src/img/rss.svg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_rss_svg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    color: #fff;\\n    background: #17181c;\\n    font-family: sans-serif;\\n}\\n\\nmain {\\n    display: flex;\\n    justify-content: center;\\n\\n}\\n\\n@media (max-width: 900px) {\\n    main {\\n        flex-direction: column;\\n    }\\n}\\n\\nheader {\\n    padding: 10px 30px;\\n}\\n\\nheader h1 {\\n    font-size: 40px;\\n    font-weight: 800;\\n}\\n\\nfooter {\\n    height: 100px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n   \\n}\\n\\nfooter .copyright {\\n    font-size: 14px;\\n    color: #333;\\n    text-align: center;\\n}\\n\\nfooter .copyright a {\\n    color: #444;\\n}\\n\\nfooter .copyright a:hover {\\n    color: #555;\\n}\\n\\nfooter .copyright:before {\\n    content: '©';\\n}\\n\\nfooter .logo-rsschool {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    height: 40px;\\n    width: 100px;\\n    margin: 0 30px 0 30px ;\\n}\\n\\nfooter .footer__year a {\\n    text-decoration: none;\\n    color: #fff;\\n    font-size: 1em;\\n}\\n\\n\\nfooter.logo-rsschool:hover {\\n    filter: invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://NewsJS/./src/global.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://NewsJS/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://NewsJS/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://NewsJS/./src/components/view/news/news.css?");

/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://NewsJS/./src/components/view/sources/sources.css?");

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ \"./node_modules/css-loader/dist/cjs.js!./src/global.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://NewsJS/./src/global.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://NewsJS/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst controller_1 = __importDefault(__webpack_require__(/*! ../controller/controller */ \"./src/components/controller/controller.ts\"));\nconst appView_1 = __webpack_require__(/*! ../view/appView */ \"./src/components/view/appView.ts\");\nclass App {\n    constructor() {\n        this.controller = new controller_1.default();\n        this.view = new appView_1.AppView();\n        this.controller = new controller_1.default();\n        this.view = new appView_1.AppView();\n    }\n    start() {\n        const sourcesElement = document.querySelector('.sources');\n        sourcesElement.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));\n        this.controller.getSources((data) => this.view.drawSources(data));\n    }\n}\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/app/app.ts?");

/***/ }),

/***/ "./src/components/controller/appLoader.ts":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst loader_1 = __importDefault(__webpack_require__(/*! ./loader */ \"./src/components/controller/loader.ts\"));\nclass AppLoader extends loader_1.default {\n    constructor() {\n        super('https://newsapi.org/v2/', {\n            apiKey: '6ada2a06577644a7ad815c5b796e3107', // получите свой ключ https://newsapi.org/\n        });\n    }\n}\nexports[\"default\"] = AppLoader;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/controller/appLoader.ts?");

/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst appLoader_1 = __importDefault(__webpack_require__(/*! ./appLoader */ \"./src/components/controller/appLoader.ts\"));\nclass AppController extends appLoader_1.default {\n    getSources(callback) {\n        super.getResp({\n            endpoint: 'sources',\n        }, callback);\n    }\n    getNews(e, callback) {\n        let target = e.target;\n        const newsContainer = e.currentTarget;\n        while (target !== newsContainer) {\n            if (target.classList.contains('source__item')) {\n                const sourceId = target.getAttribute('data-source-id');\n                if (newsContainer.getAttribute('data-source') !== sourceId) {\n                    newsContainer.setAttribute('data-source', sourceId);\n                    super.getResp({\n                        endpoint: 'everything',\n                        options: { sources: sourceId },\n                    }, callback);\n                }\n                return;\n            }\n            target = target.parentNode;\n        }\n    }\n}\nexports[\"default\"] = AppController;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/controller/controller.ts?");

/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst types_1 = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\nclass Loader {\n    constructor(baseLink, options) {\n        this.baseLink = baseLink;\n        this.options = options;\n    }\n    getResp({ endpoint, options = {} }, callback = () => {\n        console.error('No callback for GET response');\n    }) {\n        this.load('GET', endpoint, callback, options);\n    }\n    errorHandler(res) {\n        if (!res.ok) {\n            if (res.status === types_1.Status.One || res.status === types_1.Status.Two)\n                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);\n            throw Error(res.statusText);\n        }\n        return res;\n    }\n    makeUrl(options, endpoint) {\n        const urlOptions = Object.assign(Object.assign({}, this.options), options);\n        let url = `${this.baseLink}${endpoint}?`;\n        Object.keys(urlOptions).forEach((key) => {\n            url += `${key}=${urlOptions[key]}&`;\n        });\n        return url.slice(0, -1);\n    }\n    load(method, endpoint, callback, options) {\n        fetch(this.makeUrl(options, endpoint), { method })\n            .then(this.errorHandler)\n            .then((res) => res.json())\n            .then((data) => callback(data))\n            .catch((err) => console.error(err));\n    }\n}\nexports[\"default\"] = Loader;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/controller/loader.ts?");

/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppView = void 0;\nconst news_1 = __importDefault(__webpack_require__(/*! ./news/news */ \"./src/components/view/news/news.ts\"));\nconst sources_1 = __importDefault(__webpack_require__(/*! ./sources/sources */ \"./src/components/view/sources/sources.ts\"));\nclass AppView {\n    constructor() {\n        this.news = new news_1.default();\n        this.sources = new sources_1.default();\n    }\n    drawNews(data) {\n        const values = (data === null || data === void 0 ? void 0 : data.articles) ? data === null || data === void 0 ? void 0 : data.articles : [];\n        this.news.draw(values);\n    }\n    drawSources(data) {\n        const values = (data === null || data === void 0 ? void 0 : data.sources) ? data === null || data === void 0 ? void 0 : data.sources : [];\n        this.sources.draw(values);\n    }\n}\nexports.AppView = AppView;\nexports[\"default\"] = AppView;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/view/appView.ts?");

/***/ }),

/***/ "./src/components/view/news/news.ts":
/*!******************************************!*\
  !*** ./src/components/view/news/news.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./news.css */ \"./src/components/view/news/news.css\");\nclass News {\n    draw(data) {\n        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;\n        const fragment = document.createDocumentFragment();\n        const newsItemTemp = document.querySelector('#newsItemTemp');\n        news.forEach((item, idx) => {\n            const newsClone = newsItemTemp.content.cloneNode(true);\n            if (idx % 2) {\n                const newsItem = newsClone.querySelector('.news__item');\n                newsItem.classList.add('alt');\n            }\n            const newsPhoto = newsClone.querySelector('.news__meta-photo');\n            const newsAutor = newsClone.querySelector('.news__meta-author');\n            const newsDate = newsClone.querySelector('.news__meta-date');\n            const newsTittle = newsClone.querySelector('.news__description-title');\n            const newsSourses = newsClone.querySelector('.news__description-source');\n            const newsContent = newsClone.querySelector('.news__description-content');\n            const newsMore = newsClone.querySelector('.news__read-more a');\n            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;\n            newsAutor.textContent = item.author || item.source.name;\n            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');\n            newsTittle.textContent = item.title;\n            newsSourses.textContent = item.source.name;\n            newsContent.textContent = item.description;\n            newsMore.setAttribute('href', item.url);\n            fragment.append(newsClone);\n        });\n        const newContainer = document.querySelector('.news');\n        newContainer.innerHTML = '';\n        newContainer.appendChild(fragment);\n    }\n}\nexports[\"default\"] = News;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/view/news/news.ts?");

/***/ }),

/***/ "./src/components/view/sources/sources.ts":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./sources.css */ \"./src/components/view/sources/sources.css\");\nclass Sources {\n    draw(data) {\n        const fragment = document.createDocumentFragment();\n        const sourceItemTemp = document.querySelector('#sourceItemTemp');\n        data.forEach((item) => {\n            const sourceClone = sourceItemTemp.content.cloneNode(true);\n            const sourceItemName = sourceClone.querySelector('.source__item-name');\n            const sourceItem = sourceClone.querySelector('.source__item');\n            sourceItemName.textContent = item.name;\n            sourceItem.setAttribute('data-source-id', item.id);\n            fragment.append(sourceClone);\n        });\n        const sources = document.querySelector('.sources');\n        sources.append(fragment);\n    }\n}\nexports[\"default\"] = Sources;\n\n\n//# sourceURL=webpack://NewsJS/./src/components/view/sources/sources.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_1 = __importDefault(__webpack_require__(/*! ./components/app/app */ \"./src/components/app/app.ts\"));\n__webpack_require__(/*! ./global.css */ \"./src/global.css\");\nconst app = new app_1.default();\napp.start();\n\n\n//# sourceURL=webpack://NewsJS/./src/index.ts?");

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Status = void 0;\nvar Status;\n(function (Status) {\n    Status[Status[\"One\"] = 401] = \"One\";\n    Status[Status[\"Two\"] = 404] = \"Two\";\n})(Status = exports.Status || (exports.Status = {}));\n\n\n//# sourceURL=webpack://NewsJS/./src/types/index.ts?");

/***/ }),

/***/ "./src/img/rss.svg":
/*!*************************!*\
  !*** ./src/img/rss.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2418248d4ccd4e7738a4.svg\";\n\n//# sourceURL=webpack://NewsJS/./src/img/rss.svg?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;