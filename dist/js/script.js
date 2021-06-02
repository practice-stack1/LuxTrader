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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (isMobile);

/***/ }),

/***/ "./src/js/basic/dynamic_adaptive.js":
/*!******************************************!*\
  !*** ./src/js/basic/dynamic_adaptive.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DynamicAdapt = /*#__PURE__*/function () {
  function DynamicAdapt(type) {
    _classCallCheck(this, DynamicAdapt);

    this.type = type;
  }

  _createClass(DynamicAdapt, [{
    key: "init",
    value: function init() {
      var _this = this;

      // массив объектов
      this.оbjects = [];
      this.daClassname = '_dynamic_adapt_'; // массив DOM-элементов

      this.nodes = _toConsumableArray(document.querySelectorAll('[data-da]')); // наполнение оbjects объктами

      this.nodes.forEach(function (node) {
        var data = node.dataset.da.trim();
        var dataArray = data.split(',');
        var оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector("".concat(dataArray[0].trim()));
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
        оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
        оbject.index = _this.indexInParent(оbject.parent, оbject.element);

        _this.оbjects.push(оbject);
      });
      this.arraySort(this.оbjects); // массив уникальных медиа-запросов

      this.mediaQueries = this.оbjects.map(function (_ref) {
        var breakpoint = _ref.breakpoint;
        return "(".concat(_this.type, "-width: ").concat(breakpoint, "px),").concat(breakpoint);
      }).filter(function (item, index, self) {
        return self.indexOf(item) === index;
      }); // навешивание слушателя на медиа-запрос
      // и вызов обработчика при первом запуске

      this.mediaQueries.forEach(function (media) {
        var mediaSplit = media.split(',');
        var matchMedia = window.matchMedia(mediaSplit[0]);
        var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

        var оbjectsFilter = _this.оbjects.filter(function (_ref2) {
          var breakpoint = _ref2.breakpoint;
          return breakpoint === mediaBreakpoint;
        });

        matchMedia.addEventListener('change', function () {
          _this.mediaHandler(matchMedia, оbjectsFilter);
        });

        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
    } // Основная функция

  }, {
    key: "mediaHandler",
    value: function mediaHandler(matchMedia, оbjects) {
      var _this2 = this;

      if (matchMedia.matches) {
        оbjects.forEach(function (оbject) {
          оbject.index = _this2.indexInParent(оbject.parent, оbject.element);

          _this2.moveTo(оbject.place, оbject.element, оbject.destination);
        });
      } else {
        оbjects.forEach(function (_ref3) {
          var parent = _ref3.parent,
              element = _ref3.element,
              index = _ref3.index;

          if (element.classList.contains(_this2.daClassname)) {
            _this2.moveBack(parent, element, index);
          }
        });
      }
    } // Функция перемещения

  }, {
    key: "moveTo",
    value: function moveTo(place, element, destination) {
      element.classList.add(this.daClassname);

      if (place === 'last' || place >= destination.children.length) {
        destination.append(element);
        return;
      }

      if (place === 'first') {
        destination.prepend(element);
        return;
      }

      destination.children[place].before(element);
    } // Функция возврата

  }, {
    key: "moveBack",
    value: function moveBack(parent, element, index) {
      element.classList.remove(this.daClassname);

      if (parent.children[index] !== undefined) {
        parent.children[index].before(element);
      } else {
        parent.append(element);
      }
    } // Функция получения индекса внутри родителя

  }, {
    key: "indexInParent",
    value: function indexInParent(parent, element) {
      return _toConsumableArray(parent.children).indexOf(element);
    } // Функция сортировки массива по breakpoint и place
    // по возрастанию для this.type = min
    // по убыванию для this.type = max

  }, {
    key: "arraySort",
    value: function arraySort(arr) {
      if (this.type === 'min') {
        arr.sort(function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }

            if (a.place === 'first' || b.place === 'last') {
              return -1;
            }

            if (a.place === 'last' || b.place === 'first') {
              return 1;
            }

            return a.place - b.place;
          }

          return a.breakpoint - b.breakpoint;
        });
      } else {
        arr.sort(function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }

            if (a.place === 'first' || b.place === 'last') {
              return 1;
            }

            if (a.place === 'last' || b.place === 'first') {
              return -1;
            }

            return b.place - a.place;
          }

          return b.breakpoint - a.breakpoint;
        });
        return;
      }
    }
  }]);

  return DynamicAdapt;
}();

var da = new DynamicAdapt("max");
da.init();

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// document.querySelector('.wrapper').classList.add('loaded');
function ibg() {
  var ibgs = document.querySelectorAll('.ibg');
  ibgs.forEach(function (value) {
    if (value.querySelector('img')) {
      value.style.cssText = "background-image: url(".concat(value.querySelector('img').getAttribute('src'), ")");
    }
  });
}

ibg(); // export default ibg;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header-height */ "./src/js/modules/header-height.js");
/* harmony import */ var _basic_dynamic_adaptive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/dynamic_adaptive */ "./src/js/basic/dynamic_adaptive.js");
/* harmony import */ var _basic_dynamic_adaptive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_basic_dynamic_adaptive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/ibg */ "./src/js/basic/ibg.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_basic_ibg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/arrow */ "./src/js/modules/arrow.js");





window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_header_height__WEBPACK_IMPORTED_MODULE_0__["default"])('.header', '.header__container');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__burger', '.header__menu-body');
  Object(_modules_arrow__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/modules/arrow.js":
/*!*********************************!*\
  !*** ./src/js/modules/arrow.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");


var arrow = function arrow() {
  var hr = document.querySelector('.header__region');

  if (_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
    document.body.classList.add('_touch');
    hr.classList.add('nohover');
    var menuArrows = document.querySelectorAll('.menu__arrow');

    if (menuArrows.length > 0) {
      var _loop = function _loop(index) {
        var menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle('_active');
        });
      };

      for (var index = 0; index < menuArrows.length; index++) {
        _loop(index);
      }
    }

    hr.addEventListener('click', function () {
      var arrow = document.querySelector('.region__arrow'),
          subMenu = document.querySelector('.region__sub-menu');
      arrow.classList.toggle('_active');

      if (document.documentElement.clientWidth < 810) {
        if (arrow.classList.contains('_active')) {
          subMenu.style.display = 'block';
        } else {
          subMenu.style.display = 'none';
        }
      } else {
        if (arrow.classList.contains('_active')) {
          subMenu.style.visibility = 'visible';
          subMenu.style.opacity = '1';
        } else {
          subMenu.style.visibility = 'hidden';
          subMenu.style.opacity = '0';
        }
      }
    });
  } else {
    document.body.classList.add('_pc');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (arrow);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var burger = function burger(header_burger, header_menu) {
  var burger = document.querySelector(header_burger),
      menu = document.querySelector(header_menu);
  burger.addEventListener('click', function () {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/header-height.js":
/*!*****************************************!*\
  !*** ./src/js/modules/header-height.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var headerH = function headerH(header, header_inner) {
  var head = document.querySelector(header);
  var headerInner = Array.from(head.querySelector(header_inner).children);

  if (head.clientHeight > 75) {
    for (var i = 0; i < headerInner.length; i++) {
      headerInner[i].style.cssText += ' align-self: center';
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (headerH);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map