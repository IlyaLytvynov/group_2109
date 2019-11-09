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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_15/button.js":
/*!*********************************!*\
  !*** ./src/lesson_15/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function article(target, title, content) {
  var div = document.createElement('div');
  var header = document.createElement('h2');
  var paragraph = document.createElement('p');
  header.classList.add('main__header');
  paragraph.classList.add('main__paragraph');
  header.style.background = 'rgb(255, 0, 0)';
  header.textContent = title;
  paragraph.textContent = content;
  div.appendChild(header);
  div.appendChild(paragraph);
  target.appendChild(div);
}

function button(target, title, clickHandler) {
  var button = document.createElement('button');
  var span = document.createElement('span');
  span.textContent = title;
  button.appendChild(span);
  target.appendChild(button);

  button.onclick = function () {
    clickHandler();
  };
}

button(document.querySelector('.test'), 'HELLO WORLD', function () {
  alert('Hello!');
});
button(document.querySelector('body'), 'Add article', function () {
  article(document.querySelector('body'), prompt('Enter header'), prompt('Eneter content'), 'header_class_name');
});

/***/ }),

/***/ "./src/lesson_15/lamp.js":
/*!*******************************!*\
  !*** ./src/lesson_15/lamp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getColorNumber() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return "rgb(".concat(getColorNumber(), ", ").concat(getColorNumber(), ", ").concat(getColorNumber(), ")");
}

function lamp(target) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var intervalId;
  var lampElement = document.createElement('button');
  lampElement.classList.add('lamp');

  var colorSwitcher = function colorSwitcher() {
    lampElement.style.backgroundColor = getRandomColor();
  };

  var clickHandler = function clickHandler() {
    lampElement.classList.toggle('active');
    lampElement.style.backgroundColor = getRandomColor();
    clearInterval(intervalId);
    intervalId = setInterval(colorSwitcher, speed);
  };

  lampElement.onclick = clickHandler;
  target.appendChild(lampElement);
}

for (var i = 0; i < 5; i++) {
  lamp(document.querySelector('body'), Math.floor(Math.random() * 5000));
}

/***/ }),

/***/ "./src/lesson_15/lesson_15.js":
/*!************************************!*\
  !*** ./src/lesson_15/lesson_15.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_15_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_15.scss */ "./src/lesson_15/lesson_15.scss");
/* harmony import */ var _lesson_15_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_15_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/lesson_15/button.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamp */ "./src/lesson_15/lamp.js");
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lamp__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/lesson_15/lesson_15.scss":
/*!**************************************!*\
  !*** ./src/lesson_15/lesson_15.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 13:
/*!******************************************!*\
  !*** multi ./src/lesson_15/lesson_15.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_15/lesson_15.js */"./src/lesson_15/lesson_15.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_15.js.map