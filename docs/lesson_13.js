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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_13/feed.js":
/*!*******************************!*\
  !*** ./src/lesson_13/feed.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var feed = [{
  imgUrl: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  likes: 500,
  comments: 300,
  title: 'Beautiful mounts'
}, {
  imgUrl: 'https://images.unsplash.com/photo-1556046785-90b800412d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  likes: 150,
  comments: 14,
  title: 'Beautiful mounts 2'
}];

function renderImages() {
  var feedDomNode = document.querySelector('.feed');
  console.log(feedDomNode);
  var imgDomNodes = feed.map(function (post) {
    var template = "\n      <div class=\"feed__item\">\n        <img src=\"".concat(post.imgUrl, "\" alt=\"").concat(post.title, "\" />\n        <div class=\"feed__overlay\">\n          <h2>").concat(post.title, "</h2>\n          <span>Likes:").concat(post.likes, "</span>\n        </div>\n      </div>\n    ");
    return template;
  });
  feedDomNode.innerHTML = imgDomNodes.join('');
}

renderImages();

/***/ }),

/***/ "./src/lesson_13/lesson_13.js":
/*!************************************!*\
  !*** ./src/lesson_13/lesson_13.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_13_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_13.scss */ "./src/lesson_13/lesson_13.scss");
/* harmony import */ var _lesson_13_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_13_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./src/lesson_13/objects.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_objects_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed */ "./src/lesson_13/feed.js");
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_feed__WEBPACK_IMPORTED_MODULE_2__);



var cart = ['Test', 'John'];

var setToCart = function setToCart() {
  // Function expression
  var productName = prompt('What you want?');
  cart.push(productName);
};

var printList = function printList() {
  // Function declaration
  output.innerHTML = '';

  for (var i = 0; i < cart.length; i++) {
    var product = cart[i];
    output.innerHTML = output.innerHTML + '<li>' + product + '</li>';
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cart[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _product = _step.value;
      output.innerHTML = output.innerHTML + '<li>' + _product + '</li>';
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
};

printList();

function startProgram() {
  setToCart();
  printList();
}

clickMeBtn.onclick = startProgram;

/***/ }),

/***/ "./src/lesson_13/lesson_13.scss":
/*!**************************************!*\
  !*** ./src/lesson_13/lesson_13.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_13/objects.js":
/*!**********************************!*\
  !*** ./src/lesson_13/objects.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var post1 = {
  imgUrl: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  likes: 500,
  comments: 300,
  test: 'Hello'
};
var post2 = {
  imgUrl: 'https://images.unsplash.com/photo-1556046785-90b800412d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  likes: 500,
  comments: 300
};
var feed = [post1, post2];

var transform = function transform(arr, transformer) {
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var helloWorld = _step.value;
      result.push(transformer(helloWorld));
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

  return result;
};

var numbers = transform([1, 3, 20, 40, 40], function (num) {
  return num * 10;
});
var strings = transform(['test', 'hello', 'john'], function (str) {
  return str.toUpperCase();
});

function getImageUrl(arg) {
  return arg.imgUrl;
}

var images1 = transform(feed, getImageUrl);
var images2 = feed.map(function (arg) {
  return arg.imgUrl;
});
console.log(images1);

/***/ }),

/***/ 12:
/*!******************************************!*\
  !*** multi ./src/lesson_13/lesson_13.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_13/lesson_13.js */"./src/lesson_13/lesson_13.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_13.js.map