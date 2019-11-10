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

/***/ "./src/lesson_16/lesson_16.js":
/*!************************************!*\
  !*** ./src/lesson_16/lesson_16.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16.scss */ "./src/lesson_16/lesson_16.scss");
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trafficLighterObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trafficLighterObject */ "./src/lesson_16/trafficLighterObject.js");


var trafficLighter = new _trafficLighterObject__WEBPACK_IMPORTED_MODULE_1__["TrafficLighter"]();
trafficLighter.init();

/***/ }),

/***/ "./src/lesson_16/lesson_16.scss":
/*!**************************************!*\
  !*** ./src/lesson_16/lesson_16.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/switcher.js":
/*!***********************************!*\
  !*** ./src/lesson_16/switcher.js ***!
  \***********************************/
/*! exports provided: Switcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switcher", function() { return Switcher; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Switcher =
/*#__PURE__*/
function () {
  /**
   * @param controlledInstance Object
   * @param controlledInstance.enable Function
   * @param controlledInstance.disable Function
   */
  function Switcher() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var controlledInstance = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Switcher);

    this.target = target;
    this.isActive = false;
    this.btn = document.createElement('button');
    this.btn.textContent = 'TOggle';

    this.btn.onclick = function () {
      _this.toggle();
    };

    this.target.appendChild(this.btn);
    this.controlledInstance = controlledInstance;
  }

  _createClass(Switcher, [{
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.disable();
      } else {
        this.enable();
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      this.isActive = true;
      this.btn.classList.add('active');
      this.controlledInstance.enable();
    }
  }, {
    key: "disable",
    value: function disable() {
      this.isActive = false;
      this.btn.classList.remove('active');
      this.controlledInstance.disable();
    }
  }]);

  return Switcher;
}();

var SwitcherOld = function SwitcherOld() {
  var _this2 = this;

  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
  var controlledInstance = arguments.length > 1 ? arguments[1] : undefined;
  this.target = target;
  this.isActive = false;
  this.btn = document.createElement('button');
  this.btn.textContent = 'TOggle';

  this.btn.onclick = function () {
    _this2.toggle();
  };

  this.target.appendChild(this.btn);
  this.controlledInstance = controlledInstance;
};

SwitcherOld.prototype.enable = function () {
  this.isActive = true;
  this.btn.classList.add('active');
  this.controlledInstance.enable();
};

SwitcherOld.prototype.disable = function () {
  this.isActive = false;
  this.btn.classList.remove('active');
  this.controlledInstance.disable();
};

SwitcherOld.prototype.toggle = function () {
  if (this.isActive) {
    this.disable();
  } else {
    this.enable();
  }
};

/***/ }),

/***/ "./src/lesson_16/trafficLighter.scss":
/*!*******************************************!*\
  !*** ./src/lesson_16/trafficLighter.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/trafficLighterObject.js":
/*!***********************************************!*\
  !*** ./src/lesson_16/trafficLighterObject.js ***!
  \***********************************************/
/*! exports provided: TrafficLighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighter", function() { return TrafficLighter; });
/* harmony import */ var _trafficLighter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trafficLighter.scss */ "./src/lesson_16/trafficLighter.scss");
/* harmony import */ var _trafficLighter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trafficLighter_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switcher */ "./src/lesson_16/switcher.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TrafficLighter =
/*#__PURE__*/
function () {
  function TrafficLighter() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['red', 'yellow', 'green'];
    var intervalSpeed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

    _classCallCheck(this, TrafficLighter);

    this.intervalSpeed = intervalSpeed;
    this.target = target;
    this.switcher = null;
    this.conteiner = document.createElement('div');
    this.lights = [];
    this.colors = colors;
    this.intervalId = null;
    this.activeIndex = 2;
    this.isActive = false;
  }

  _createClass(TrafficLighter, [{
    key: "disable",
    value: function disable() {
      this.isActive = false;
      clearInterval(this.intervalId);
      this.lights[this.activeIndex].classList.remove('active');
      this.activeIndex = 0;
    }
  }, {
    key: "enable",
    value: function enable() {
      var _this = this;

      this.isActive = true;
      this.lights[this.activeIndex].classList.add('active');
      this.intervalId = setInterval(function () {
        _this.lights[_this.activeIndex].classList.remove('active');

        if (_this.activeIndex < 2) {
          _this.activeIndex++;
        } else {
          _this.activeIndex = 0;
        }

        _this.lights[_this.activeIndex].classList.add('active');
      }, this.intervalSpeed);
    }
  }, {
    key: "init",
    value: function init() {
      this.conteiner.classList.add('lighter');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var color = _step.value;
          var light = document.createElement('div');
          light.classList.add('lighter__light');
          light.classList.add("lighter__light_".concat(color));
          this.lights.push(light);
          this.conteiner.appendChild(light);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.switcher = new _switcher__WEBPACK_IMPORTED_MODULE_1__["Switcher"](this.conteiner, this);
      this.target.appendChild(this.conteiner);
    }
  }]);

  return TrafficLighter;
}();

/***/ }),

/***/ 14:
/*!******************************************!*\
  !*** multi ./src/lesson_16/lesson_16.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16/lesson_16.js */"./src/lesson_16/lesson_16.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_16.js.map