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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    forEach(Object_keys(ctx), function (key) {
        context[key] = ctx[key];
    });

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};


/***/ }),

/***/ "./src/lesson_17/lesson_17.js":
/*!************************************!*\
  !*** ./src/lesson_17/lesson_17.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_17_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_17.scss */ "./src/lesson_17/lesson_17.scss");
/* harmony import */ var _lesson_17_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_17_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scrypts_postsBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrypts/postsBox */ "./src/lesson_17/scrypts/postsBox.js");


var postBox = new _scrypts_postsBox__WEBPACK_IMPORTED_MODULE_1__["PostsBox"]();

/***/ }),

/***/ "./src/lesson_17/lesson_17.scss":
/*!**************************************!*\
  !*** ./src/lesson_17/lesson_17.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_17/scrypts/form.js":
/*!***************************************!*\
  !*** ./src/lesson_17/scrypts/form.js ***!
  \***************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
  function Form() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var onSubmit = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Form);

    this.target = target;
    this.onSubmit = onSubmit;
    this.render();
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.form = document.createElement('form');
      var input = document.createElement('input');
      var textarea = document.createElement('textarea');
      var btn = document.createElement('button');
      input.placeholder = 'Title';
      textarea.placeholder = 'Content';
      btn.textContent = 'Add';
      this.form.addEventListener('submit', function (eventObject) {
        console.log('DATA SEND:', eventObject);
        eventObject.preventDefault();

        _this.onSubmit({
          title: input.value,
          content: textarea.value
        });

        input.value = '';
        textarea.value = '';
      });
      this.form.appendChild(input);
      this.form.appendChild(textarea);
      this.form.appendChild(btn);
      this.target.appendChild(this.form);
    }
  }]);

  return Form;
}();

/***/ }),

/***/ "./src/lesson_17/scrypts/list.js":
/*!***************************************!*\
  !*** ./src/lesson_17/scrypts/list.js ***!
  \***************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./src/lesson_17/scrypts/post.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var List =
/*#__PURE__*/
function () {
  function List() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var onDelete = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, List);

    this.target = target;
    this.ul = document.createElement('ul');
    this.onDelete = onDelete;
    this.listItems = [];
  }

  _createClass(List, [{
    key: "renderList",
    value: function renderList(posts) {
      this.ul.innerHTML = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var post = _step.value;
          this.renderOne(post);
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

      this.target.appendChild(this.ul);
    }
  }, {
    key: "deleteHandler",
    value: function deleteHandler(id) {
      this.onDelete(id);
    }
  }, {
    key: "renderOne",
    value: function renderOne(post) {
      var _this = this;

      this.listItems.push(new _post__WEBPACK_IMPORTED_MODULE_0__["Post"](this.ul, post, function (id) {
        return _this.deleteHandler(id);
      }));
    }
  }]);

  return List;
}();

/***/ }),

/***/ "./src/lesson_17/scrypts/post.js":
/*!***************************************!*\
  !*** ./src/lesson_17/scrypts/post.js ***!
  \***************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _styles_post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/post.scss */ "./src/lesson_17/styles/post.scss");
/* harmony import */ var _styles_post_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_post_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Post =
/*#__PURE__*/
function () {
  function Post(target, post, onDelete) {
    _classCallCheck(this, Post);

    this.target = target;
    this.post = post;
    this.onDelete = onDelete;
    this.render();
  }

  _createClass(Post, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.li = document.createElement('li');
      var h2 = document.createElement('h2');
      var p = document.createElement('p');
      var btn = document.createElement('button');
      this.li.classList.add('post');
      setTimeout(function () {
        _this.li.classList.add('post_visible');
      }, 10);
      btn.addEventListener('click', function () {
        _this.target.removeChild(_this.li);

        _this.onDelete(_this.post.id);
      });
      btn.textContent = 'remove';
      h2.textContent = this.post.title;
      p.textContent = this.post.content;
      this.li.appendChild(h2);
      this.li.appendChild(p);
      this.li.appendChild(btn);

      if (this.target.childNodes.length > 0) {
        console.log(this.target.childNodes);
        this.target.insertBefore(this.li, this.target.childNodes[0]);
      } else {
        this.target.appendChild(this.li);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      this.target.removeChild(this.li);
    }
  }]);

  return Post;
}();

/***/ }),

/***/ "./src/lesson_17/scrypts/postsBox.js":
/*!*******************************************!*\
  !*** ./src/lesson_17/scrypts/postsBox.js ***!
  \*******************************************/
/*! exports provided: PostsBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsBox", function() { return PostsBox; });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/lesson_17/scrypts/form.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/lesson_17/scrypts/list.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PostsBox =
/*#__PURE__*/
function () {
  function PostsBox() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

    _classCallCheck(this, PostsBox);

    this.posts = [];
    this.form = new _form__WEBPACK_IMPORTED_MODULE_0__["Form"](target, function (data) {
      return _this.sendData(data);
    });
    this.list = new _list__WEBPACK_IMPORTED_MODULE_1__["List"](target, function (id) {
      return _this.remove(id);
    });
    this.fetchPosts();
  }

  _createClass(PostsBox, [{
    key: "remove",
    value: function remove(id) {
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', "http://localhost:3000/posts/".concat(id));
      xhr.send();
      xhr.addEventListener('load', function () {
        console.log(xhr.response);

        if (xhr.status >= 400) {
          alert('Not deleted');
        }
      });
    }
  }, {
    key: "sendData",
    value: function sendData(data) {
      var _this2 = this;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/posts');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(data));
      xhr.addEventListener('load', function () {
        var post = JSON.parse(xhr.response);

        _this2.posts.push(post);

        _this2.list.renderOne(post);
      });
    }
  }, {
    key: "fetchPosts",
    value: function fetchPosts() {
      var _this3 = this;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:3000/posts');
      xhr.send();
      xhr.addEventListener('load', function () {
        console.log(xhr.response);
        _this3.posts = JSON.parse(xhr.response);

        _this3.list.renderList(_this3.posts);
      });
    }
  }]);

  return PostsBox;
}();

/***/ }),

/***/ "./src/lesson_17/styles/post.scss":
/*!****************************************!*\
  !*** ./src/lesson_17/styles/post.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!******************************************!*\
  !*** multi ./src/lesson_17/lesson_17.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_17/lesson_17.js */"./src/lesson_17/lesson_17.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_17.js.map