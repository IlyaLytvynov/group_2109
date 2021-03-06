/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/interval-example/interval-example.js":
/*!**************************************************!*\
  !*** ./src/interval-example/interval-example.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interval_example_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval-example.scss */ "./src/interval-example/interval-example.scss");
/* harmony import */ var _interval_example_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interval_example_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lighter */ "./src/interval-example/lighter.js");
/* harmony import */ var _lighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lighter__WEBPACK_IMPORTED_MODULE_1__);


var lighter = new _lighter__WEBPACK_IMPORTED_MODULE_1__["TrafficLighter"]();

/***/ }),

/***/ "./src/interval-example/interval-example.scss":
/*!****************************************************!*\
  !*** ./src/interval-example/interval-example.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/interval-example/lighter.js":
/*!*****************************************!*\
  !*** ./src/interval-example/lighter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/illial/WebAcademy/group_2109/src/interval-example/lighter.js: Export 'TrafficLighterES6' is not defined (83:9)\n\n\u001b[0m \u001b[90m 81 | \u001b[39m  }\u001b[0m\n\u001b[0m \u001b[90m 82 | \u001b[39m}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 83 | \u001b[39m\u001b[36mexport\u001b[39m { \u001b[33mTrafficLighterES6\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 84 | \u001b[39m\u001b[0m\n    at Object.raise (/Users/illial/WebAcademy/group_2109/node_modules/@babel/parser/lib/index.js:6420:17)\n    at Object.parseTopLevel (/Users/illial/WebAcademy/group_2109/node_modules/@babel/parser/lib/index.js:9946:14)\n    at Object.parse (/Users/illial/WebAcademy/group_2109/node_modules/@babel/parser/lib/index.js:11447:17)\n    at parse (/Users/illial/WebAcademy/group_2109/node_modules/@babel/parser/lib/index.js:11483:38)\n    at parser (/Users/illial/WebAcademy/group_2109/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/illial/WebAcademy/group_2109/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/illial/WebAcademy/group_2109/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/illial/WebAcademy/group_2109/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/illial/WebAcademy/group_2109/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 14:
/*!********************************************************!*\
  !*** multi ./src/interval-example/interval-example.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/interval-example/interval-example.js */"./src/interval-example/interval-example.js");


/***/ })

/******/ });
//# sourceMappingURL=interval-example.js.map