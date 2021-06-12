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

/***/ "./src/js/basic/localizationData.js":
/*!******************************************!*\
  !*** ./src/js/basic/localizationData.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var localizationData = {
  '.main__title-luxery': {
    'ukr': 'Тільки ексклюзивне',
    'ru': 'Только эксклюзивные',
    'en': 'Exclusive only'
  },
  '.main__title-general': {
    'ukr': 'Лоти під аукціон і вільного продажу',
    'ru': 'Лоты под аукцион и свобоДную продажу',
    'en': 'Lots for auction and free sale'
  },
  '.main__text': {
    'ukr': 'Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний і автоматизований сервіс з купівлі і продажу, а також виставлення лотів на аукціон, надаємо особисті кабінети, а також надаємо сопутствубщіе послуги з продажем рідкісних і дорогих речей',
    'ru': 'Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный и автоматизированный сервис по покупке и продаже, а также выставлению лотов на аукцион, предоставляем личные кабинеты, а также оказываем сопутствубщие услуги с продажей редких и дорогих вещейу',
    'en': 'We collect an exclusive audience and exclusive lots, provide a convenient and automated service for buying and selling, as well as placing lots for an auction, provide personal accounts, and also provide related services with the sale of rare and expensive items.'
  },
  '.main__button-span': {
    'ukr': 'Приєднається',
    'ru': 'Присоединится',
    'en': 'Join'
  },
  '.region__span': {
    'ukr': 'Вибір Регіону',
    'ru': 'Выбор Региона',
    'en': 'Region Selection'
  },
  '.header__menu-item-link': {
    'ukr': ['Головна', 'Аукціон', 'Проект', 'Партнери', 'Контакти'],
    'ru': ['Главная', 'Аукцион', 'О проекте', 'Партнерам', 'Контакты'],
    'en': ['Main', 'Auction', 'Project', 'Partners', 'Contacts']
  },
  '.lots__title-luxery': {
    'ukr': 'Популярні',
    'ru': ' Популярные',
    'en': 'Popular'
  },
  '.lots__title-general': {
    'ukr': 'лоти Під аукціон',
    'ru': 'лоты Под аукцион',
    'en': 'lots Under auction'
  },
  '.price__title': {
    'ukr': ['Поточна ставка', 'Поточна ставка', 'Поточна ставка'],
    'ru': ['Текущая ставка', 'Текущая ставка', 'Текущая ставка'],
    'en': ['Current rate', 'Current rate', 'Current rate']
  },
  '.lots__button-span': {
    'ukr': ['ПІДНЯТИ СТАВКУ', 'ПІДНЯТИ СТАВКУ', 'ПІДНЯТИ СТАВКУ'],
    'ru': ['ПОДНЯТЬ СТАВКУ', 'ПОДНЯТЬ СТАВКУ', 'ПОДНЯТЬ СТАВКУ'],
    'en': ['RAISE BET', 'RAISE BET', 'RAISE BET']
  },
  '.header-lots__header-span': {
    'ukr': 'всі лоти',
    'ru': 'Все лоты',
    'en': 'All lots'
  },
  '.kind__title': {
    'ukr': ['Годинники', 'Ювелірні Вироби', 'Автотранспорт і човни', 'Аксуссуари', 'Нерухомість', 'Нерухомість', 'Одяг та взуття', 'Предмети мистецтва', 'алкоголю і їжа'],
    'ru': ['Часы', 'Ювелирные Изделия', 'Автотранспорт и лодки', 'Аксуссуары', 'Недвижимость', 'Недвижимость', 'Одежда и обувь', 'Предметы искусства', 'АЛкоголь и еда'],
    'en': ['Watches', 'Jewelry', 'Vehicles and Boats', 'Accessories', 'Real Estate', 'Real Estate', 'Clothes and Shoes', 'Objects of Art', 'Alcohol and Food']
  },
  '.about__container-p': {
    'ukr': ['Ми раді вітати вас на унікальній Лакшері аукціоні, тут ви зможете знайти гідні для себе лоти. Аукціон з продажу нерухомості в багатьох розвинених країнах являюется основним інструментом купівлі-продажу комерційної, житлової, і муніципальної нерухомості, в тому числі квартир. Загальний обсяг угод в світі на аукціонах з продажу нерухомості варіюється від 30% до 80%. Для Росії аукціон нерухомості є відносно новим і знаходить все більшу популярність. ', ' Ми раді вітати вас на унікальній Лакшері аукціоні, тут ви зможете знайти гідні для себе лоти. Аукціон з продажу нерухомості в багатьох розвинених країнах являюется основним інструментом купівлі-продажу комерційної, житлової, і муніципальної нерухомості, в тому числі квартир. Загальний обсяг угод в світі на аукціонах з продажу нерухомості варіюється від 30% до 80%. Для Росії аукціон нерухомості є відносно новим і знаходить все більшу популярність. ', ' Муніципальної нерухомості, в тому числі квартир. Загальний обсяг угод в світі на аукціонах з продажу нерухомості варіюється від 30% до 80%. '],
    'ru': ['Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%. Для России аукцион недвижимости является относительно новым и обретает все большую популярность.', 'Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%. Для России аукцион недвижимости является относительно новым и обретает все большую популярность.', 'Муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%.'],
    'en': ['We are glad to welcome you to the unique Luxury Auction, here you can find worthy lots for yourself. The real estate auction in many developed countries is the main instrument for the sale and purchase of commercial, residential, and municipal real estate, including apartments. The total volume of transactions in the world at real estate auctions varies from 30% to 80%. For Russia, the real estate auction is relatively new and is gaining more and more popularity. ', 'The real estate auction in many developed countries is the main instrument for the sale and purchase of commercial, residential, and municipal real estate, including apartments. The total volume of transactions in the world at real estate auctions varies from 30% to 80%. For Russia, the real estate auction is relatively new and is gaining more and more popularity. ', ' Municipal real estate, including apartments. The total volume of transactions in the world at auctions for the sale of real estate varies from 30% to 80%. ']
  },
  '.service__title-luxery': {
    'ukr': 'Додаткові',
    'ru': 'Дополнительные',
    'en': 'Additional'
  },
  '.service__title-general': {
    'ukr': 'послуги',
    'ru': 'услуги',
    'en': 'services'
  },
  '.service__title': {
    'ukr': ['Експертна оцінка', 'Замовлення деталей', 'Ремонт та реставрації'],
    'ru': ['Экспертная оценка', 'Заказ комплектующих', 'Ремонт и реставраци'],
    'en': ['Expert assessment', 'Ordering components', 'Repair and restoration']
  },
  '.service__text': {
    'ukr': ['Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний', 'Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний', 'Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний'],
    'ru': ['Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный ', 'Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный', 'Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный'],
    'en': ['We collect an exclusive audience and exclusive lots, give a convenient one', 'We collect an exclusive public and exclusive lots, give a convenient one', 'We collect an exclusive audience and exclusive lots, give a convenient one']
  },
  '.service__link': {
    'ukr': ['Детальніше', 'Детальніше', 'Детальніше'],
    'ru': ['Подробнее', 'Подробнее', 'Подробнее'],
    'en': ['More', 'More', 'More']
  },
  '.quotes__title-luxery': {
    'ukr': 'Інтересні',
    'ru': 'Интересные',
    'en': 'Interesting'
  },
  '.quotes__title-general': {
    'ukr': 'Цитата',
    'ru': 'ЦитатЫ',
    'en': 'Quotes'
  },
  '.quotes__text': {
    'ukr': '«Легше обдурити людей, ніж переконати їх в тому, що вони обдурені»',
    'ru': '«Легче одурачить людей, чем убедить их в том, что они одурачены»',
    'en': '"It is easier to fool people than to convince them that they are fooled."'
  },
  '.quotes__auther': {
    'ukr': 'Марк Твен',
    'ru': 'Марк Твен',
    'en': 'Mark Twain'
  },
  '.events__title-text': {
    'ukr': ['Новини', 'Події', 'Підписка'],
    'ru': ['Новости', 'Событи', 'Подписка'],
    'en': ['News', 'Events', 'Subscription']
  },
  '.news__title': {
    'ukr': ['Унікальною Лакшері аукціоні, тут ви зможете знайти', 'Гідні для себе лоти', 'Унікальною Лакшері аукціоні, тут ви зможете знайти'],
    'ru': ['Уникальной Лакшери аукционе, здесь вы сможете найти', 'Достойные для себя лоты', 'Уникальной Лакшери аукционе, здесь вы сможете найти'],
    'en': ['Unique Laksheri auctions, here you can know', 'Good luck for yourself', 'Unique Laksheri auctions, here you can know']
  },
  '.news__text': {
    'ukr': ['Продаж товарів, цінних паперів, майна підприємств, творів мистецтва та інших об`єктів, що ...', 'Майна підприємств, творів мистецтва та інших об`єктів, творів редпріятіе, творів мистецтв ...', 'Продаж товарів, цінних паперів, майна підприємств, творів мистецтва та інших об`єктів, що ... '],
    'ru': ['Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...', 'Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств...', 'Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...'],
    'en': ['Sale of goods, securities, property of enterprises, works of art and other objects, which ...', 'Property of enterprises, works of art and other objects, works of enterprises, works of art ...', 'Sale of goods, securities, property businesses, works of art and other objects that ... ']
  },
  '.occasion__title': {
    'ukr': ['Гідні для себе лоти', 'Унікальною Лакшері аукціоні, тут ви зможете знайти'],
    'ru': ['Достойные для себя лоты', 'Уникальной Лакшери аукционе, здесь вы сможете найти'],
    'en': ['Worthy lots for yourself', 'Unique Luxury Auction, here you can find']
  },
  '.occasion__text': {
    'ukr': ['Власність підприємств, витвори мистецтва та інші предмети, твори підприємств, витвори мистецтва Продаж товарів, цінних паперів, майно підприємств, витвори мистецтва та інші предмети, які ...', 'Власність підприємств, витвори мистецтва та інші предмети, твори підприємств, твори мистецтва Продаж товарів, цінних паперів, майна підприємств, творів мистецтва та інших предметів, які ... '],
    'ru': ['Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...', 'Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...'],
    'en': ['Property of enterprises, works of art and other objects, works of enterprises, works of art Sale of goods, securities, property of enterprises, works of art and other objects, which ...', 'Property of enterprises, works of art and other objects, works of enterprises, works arts Sale of goods, securities, property of enterprises, works of art and other objects, which ... ']
  },
  '.supcription__text': {
    'ukr': 'Для отримання повідомлень про нові пропозиції, введіть адресу своєї електронної пошти',
    'ru': 'Для получения уведомлений о новых предложениях, введите адрес своей электронной почты',
    'en': 'To receive notifications of new offers, enter your email address'
  },
  '.footer__menu-item-a': {
    'ukr': ['Головна', 'Аукціон', 'Про проект', 'Партнерам', 'Контакти', 'Новини', 'FAQ', 'Реклама', 'Угода', 'Реєстрація', 'Послуги'],
    'ru': ['Главная', 'Аукцион', 'О проекте', 'Партнерам', 'Контакты', 'Новости', 'FAQ', 'Реклама', 'Соглашение', 'Регистрация', 'Услуги'],
    'en': ['Main', 'Auction', 'About the project', 'For partners', 'Contacts', 'News', 'FAQ', 'Advertising', 'Agreement', 'Registration', 'Services']
  },
  '.footer__rules': {
    'ukr': 'Всі права захищені © 2014',
    'ru': 'Все права защищены © 2014',
    'en': 'All rights reserved © 2014'
  },
  '.callback__text-a': {
    'ukr': 'Зворотній зв`язок',
    'ru': 'Обратная связь',
    'en': 'Feedback'
  },
  '.forms__mail-input': {
    'ukr': 'Ваш e-mail',
    'ru': 'Ваш e-mail',
    'en': 'Your e-mail'
  },
  '.sub-menu-item-span': {
    'ukr': ['Особистий кабінет', 'Мої ставки', 'Мої лоти'],
    'ru': ['Личный кабине', 'Мои ставки', 'Мои лоты'],
    'en': ['My Account', 'My Bets', 'My Lots']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localizationData);

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
/* harmony import */ var _modules_setLocalization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setLocalization */ "./src/js/modules/setLocalization.js");
/* harmony import */ var _modules_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/localization */ "./src/js/modules/localization.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_raisebet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/raisebet */ "./src/js/modules/raisebet.js");
/* harmony import */ var _modules_checkemail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/checkemail */ "./src/js/modules/checkemail.js");











var deadline = '2021-06-15',
    timers = document.querySelectorAll('.time__count');
window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_header_height__WEBPACK_IMPORTED_MODULE_0__["default"])('.header', '.header__container');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__burger', '.header__menu-body');
  Object(_modules_arrow__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_7__["default"])(timers, deadline);
  Object(_modules_raisebet__WEBPACK_IMPORTED_MODULE_8__["default"])('.lots__button', 5000);
  Object(_modules_checkemail__WEBPACK_IMPORTED_MODULE_9__["default"])('.forms__mail-input', '.forms__mail-btn');
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
  var hu = document.querySelector('.header__user');
  var arrowRegion = document.querySelector('.region__arrow'),
      arrowUser = document.querySelector('.user__arrow');
  var subMenuRegion = document.querySelector('.region__sub-menu');
  var subMenuUser = document.querySelector('.user__sub-menu');
  var arrowArr = [arrowRegion, arrowUser];
  var subMenuArr = [subMenuRegion, subMenuUser];

  if (_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
    var clearActive = function clearActive() {
      var arrows = document.querySelectorAll('.menu__arrow');
      arrows.forEach(function (arrow) {
        if (arrow.classList.contains('_active')) {
          arrow.classList.remove('_active');
        }
      });
    };

    var changeValues = function changeValues(subMenu, arrows) {
      arrows.forEach(function (arrow, index) {
        if (document.documentElement.clientWidth < 810) {
          if (arrow.classList.contains('_active')) {
            subMenu[index].style.display = 'block';
          } else {
            subMenu[index].style.display = 'none';
          }
        } else {
          if (arrow.classList.contains('_active')) {
            subMenu[index].style.visibility = 'visible';
            subMenu[index].style.opacity = '1';
          } else {
            subMenu[index].style.visibility = 'hidden';
            subMenu[index].style.opacity = '0';
          }
        }
      });
    };

    document.body.classList.add('_touch');
    hr.classList.add('nohover');
    hu.classList.add('nohover');
    arrowRegion.addEventListener('click', function () {
      if (arrowRegion.classList.contains('_active')) {
        arrowRegion.classList.remove('_active');
      } else {
        clearActive();
        arrowRegion.classList.add('_active');
      }

      changeValues(subMenuArr, arrowArr);
    });
    arrowUser.addEventListener('click', function () {
      if (arrowUser.classList.contains('_active')) {
        arrowUser.classList.remove('_active');
      } else {
        clearActive();
        arrowUser.classList.add('_active');
      }

      changeValues(subMenuArr, arrowArr);
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

/***/ "./src/js/modules/checkemail.js":
/*!**************************************!*\
  !*** ./src/js/modules/checkemail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regulars_check_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regulars/check-email */ "./src/js/modules/regulars/check-email.js");


var checkMail = function checkMail(input, trigger) {
  var btns = document.querySelectorAll(trigger);
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var mail = btn.parentElement.querySelector(input);
      var borders = document.querySelector('.forms__mail');

      if (!Object(_regulars_check_email__WEBPACK_IMPORTED_MODULE_0__["default"])(mail)) {
        borders.style.border = '3px solid red';
        setTimeout(function () {
          borders.style.border = '3px solid #bb9c66';
        }, 1500);
      } else {
        mail.value = '';
        borders.style.border = '3px solid #bb9c66';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkMail);

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

/***/ }),

/***/ "./src/js/modules/localization.js":
/*!****************************************!*\
  !*** ./src/js/modules/localization.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function localization(data) {
  for (var key in data) {
    var lang = getElem(key).dataset.loc;

    if (checkList(key)) {
      setTranslateOfItems(data[key][lang], key);
    } else {
      setTranslate(data[key][lang], key);
    }

    if (checkInput(key)) {
      setInputTranslate(data[key][lang], key);
    }
  }
}

function getElem(key) {
  var elem = document.querySelector(key);
  return elem;
}

function getElemsOfMenu(key) {
  var elems = document.querySelectorAll(key + '[data-item]');
  return elems;
}

function setTranslateOfItems(language, key) {
  getElemsOfMenu(key).forEach(function (item, index) {
    item.textContent = language[index];
  });
}

function setTranslate(language, key) {
  getElem(key).textContent = language;
}

function setInputTranslate(language, key) {
  getElem(key).setAttribute('placeholder', "".concat(language));
}

function checkList(key) {
  if (getElem(key).getAttribute('data-item')) {
    return true;
  } else {
    return false;
  }
}

function checkInput(key) {
  if (getElem(key).getAttribute('name')) {
    return true;
  } else {
    return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (localization);

/***/ }),

/***/ "./src/js/modules/raisebet.js":
/*!************************************!*\
  !*** ./src/js/modules/raisebet.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var raise = function raise(triggers_btn, bet) {
  var triggers = document.querySelectorAll(triggers_btn);
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var count = trigger.parentElement.querySelector('.price__count');
      raiseBet(bet, count);
    });
  });

  function raiseBet(bet, count_block) {
    count_block.textContent = addGap(getSum(count_block, bet));
  }

  function getSum(count, bet) {
    return Number(count.textContent.replace(/\s/g, '')) + bet;
  }

  function addGap(num) {
    var string = String(num);
    var arrStr = string.split('');

    var arrStr2 = _toConsumableArray(arrStr);

    var counter = 1;

    for (var i = arrStr.length - 1; i >= 0; i--) {
      if (counter === 3 && i - 1 >= 0) {
        var newArr = arrStr.splice(0, i);
        newArr.push(' ');
        arrStr2 = newArr.concat(arrStr);
        arrStr = arrStr2;
        counter = 1;
        i--;
      }

      counter++;
    }

    return arrStr2.join('');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (raise);

/***/ }),

/***/ "./src/js/modules/regulars/check-email.js":
/*!************************************************!*\
  !*** ./src/js/modules/regulars/check-email.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function email_test(input) {
  if (input.value !== '') {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
  } else {
    return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (email_test);

/***/ }),

/***/ "./src/js/modules/setLocalization.js":
/*!*******************************************!*\
  !*** ./src/js/modules/setLocalization.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_localizationData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/localizationData */ "./src/js/basic/localizationData.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ "./src/js/modules/localization.js");


var elementLocalization = document.querySelectorAll('[data-loc]');
var selectLocalization = document.querySelectorAll('.region__sub-menu-item');
var language = 'ukr';
selectLocalization.forEach(function (select) {
  select.addEventListener('click', function () {
    language = select.dataset.value;
    setLang(language);
    Object(_localization__WEBPACK_IMPORTED_MODULE_1__["default"])(_basic_localizationData__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });
});
Object(_localization__WEBPACK_IMPORTED_MODULE_1__["default"])(_basic_localizationData__WEBPACK_IMPORTED_MODULE_0__["default"]);

function setLang(language) {
  elementLocalization.forEach(function (elem) {
    elem.setAttribute('data-loc', language);
  });
}

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var timer = function timer(timers, endtime) {
  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(timer, endtime) {
    var days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";
        clearInterval(timeInterval);
      }
    }
  };

  timers.forEach(function (timer) {
    setClock(timer, endtime);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map