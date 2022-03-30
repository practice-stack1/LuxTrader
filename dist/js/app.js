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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_height_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header-height.js */ \"./src/js/modules/header-height.js\");\n/* harmony import */ var _basic_dynamic_adaptive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/dynamic_adaptive.js */ \"./src/js/basic/dynamic_adaptive.js\");\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger.js */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _basic_ibg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/ibg.js */ \"./src/js/basic/ibg.js\");\n/* harmony import */ var _modules_arrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/arrow.js */ \"./src/js/modules/arrow.js\");\n/* harmony import */ var _modules_setLocalization_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setLocalization.js */ \"./src/js/modules/setLocalization.js\");\n/* harmony import */ var _modules_localization_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/localization.js */ \"./src/js/modules/localization.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/js/modules/timer.js\");\n/* harmony import */ var _modules_raisebet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/raisebet.js */ \"./src/js/modules/raisebet.js\");\n/* harmony import */ var _modules_checkemail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/checkemail.js */ \"./src/js/modules/checkemail.js\");\n/* harmony import */ var _modules_slowAnchorMove_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slowAnchorMove.js */ \"./src/js/modules/slowAnchorMove.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst deadline = \"2022-12-31\",\r\n    timers = document.querySelectorAll(\".time__count\")\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    ;(0,_modules_header_height_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".header\", \".header__container\")\r\n    ;(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\".header__burger\", \".header__menu-body\")\r\n    ;(0,_modules_arrow_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    ;(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(timers, deadline)\r\n    ;(0,_modules_raisebet_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\".lots__button\", 5000)\r\n    ;(0,_modules_checkemail_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\".forms__mail-input\", \".forms__mail-btn\")\r\n    ;(0,_modules_slowAnchorMove_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"[href^='#']\")\r\n})\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/app.js?");

/***/ }),

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet isMobile = {\r\n\tAndroid: function() {return navigator.userAgent.match(/Android/i);},\r\n\tBlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},\r\n\tiOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},\r\n\tOpera: function() {return navigator.userAgent.match(/Opera Mini/i);},\r\n\tWindows: function() {return navigator.userAgent.match(/IEMobile/i);},\r\n\tany: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMobile);\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/checkMobile.js?");

/***/ }),

/***/ "./src/js/basic/dynamic_adaptive.js":
/*!******************************************!*\
  !*** ./src/js/basic/dynamic_adaptive.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n\r\nclass DynamicAdapt {\r\n  constructor(type) {\r\n    this.type = type;\r\n  }\r\n\r\n  init() {\r\n    // массив объектов\r\n    this.оbjects = [];\r\n    this.daClassname = '_dynamic_adapt_';\r\n    // массив DOM-элементов\r\n    this.nodes = [...document.querySelectorAll('[data-da]')];\r\n\r\n    // наполнение оbjects объктами\r\n    this.nodes.forEach((node) => {\r\n      const data = node.dataset.da.trim();\r\n      const dataArray = data.split(',');\r\n      const оbject = {};\r\n      оbject.element = node;\r\n      оbject.parent = node.parentNode;\r\n      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);\r\n      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';\r\n      оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';\r\n      оbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n      this.оbjects.push(оbject);\r\n    });\r\n\r\n    this.arraySort(this.оbjects);\r\n\r\n    // массив уникальных медиа-запросов\r\n    this.mediaQueries = this.оbjects\r\n      .map(({\r\n        breakpoint\r\n      }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)\r\n      .filter((item, index, self) => self.indexOf(item) === index);\r\n\r\n    // навешивание слушателя на медиа-запрос\r\n    // и вызов обработчика при первом запуске\r\n    this.mediaQueries.forEach((media) => {\r\n      const mediaSplit = media.split(',');\r\n      const matchMedia = window.matchMedia(mediaSplit[0]);\r\n      const mediaBreakpoint = mediaSplit[1];\r\n\r\n      // массив объектов с подходящим брейкпоинтом\r\n      const оbjectsFilter = this.оbjects.filter(\r\n        ({\r\n          breakpoint\r\n        }) => breakpoint === mediaBreakpoint\r\n      );\r\n      matchMedia.addEventListener('change', () => {\r\n        this.mediaHandler(matchMedia, оbjectsFilter);\r\n      });\r\n      this.mediaHandler(matchMedia, оbjectsFilter);\r\n    });\r\n  }\r\n\r\n  // Основная функция\r\n  mediaHandler(matchMedia, оbjects) {\r\n    if (matchMedia.matches) {\r\n      оbjects.forEach((оbject) => {\r\n        оbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n        this.moveTo(оbject.place, оbject.element, оbject.destination);\r\n      });\r\n    } else {\r\n      оbjects.forEach(\r\n        ({ parent, element, index }) => {\r\n          if (element.classList.contains(this.daClassname)) {\r\n            this.moveBack(parent, element, index);\r\n          }\r\n        }\r\n      );\r\n    }\r\n  }\r\n\r\n  // Функция перемещения\r\n  moveTo(place, element, destination) {\r\n    element.classList.add(this.daClassname);\r\n    if (place === 'last' || place >= destination.children.length) {\r\n      destination.append(element);\r\n      return;\r\n    }\r\n    if (place === 'first') {\r\n      destination.prepend(element);\r\n      return;\r\n    }\r\n    destination.children[place].before(element);\r\n  }\r\n\r\n  // Функция возврата\r\n  moveBack(parent, element, index) {\r\n    element.classList.remove(this.daClassname);\r\n    if (parent.children[index] !== undefined) {\r\n      parent.children[index].before(element);\r\n    } else {\r\n      parent.append(element);\r\n    }\r\n  }\r\n\r\n  // Функция получения индекса внутри родителя\r\n  indexInParent(parent, element) {\r\n    return [...parent.children].indexOf(element);\r\n  }\r\n\r\n  // Функция сортировки массива по breakpoint и place\r\n  // по возрастанию для this.type = min\r\n  // по убыванию для this.type = max\r\n  arraySort(arr) {\r\n    if (this.type === 'min') {\r\n      arr.sort((a, b) => {\r\n        if (a.breakpoint === b.breakpoint) {\r\n          if (a.place === b.place) {\r\n            return 0;\r\n          }\r\n          if (a.place === 'first' || b.place === 'last') {\r\n            return -1;\r\n          }\r\n          if (a.place === 'last' || b.place === 'first') {\r\n            return 1;\r\n          }\r\n          return a.place - b.place;\r\n        }\r\n        return a.breakpoint - b.breakpoint;\r\n      });\r\n    } else {\r\n      arr.sort((a, b) => {\r\n        if (a.breakpoint === b.breakpoint) {\r\n          if (a.place === b.place) {\r\n            return 0;\r\n          }\r\n          if (a.place === 'first' || b.place === 'last') {\r\n            return 1;\r\n          }\r\n          if (a.place === 'last' || b.place === 'first') {\r\n            return -1;\r\n          }\r\n          return b.place - a.place;\r\n        }\r\n        return b.breakpoint - a.breakpoint;\r\n      });\r\n      return;\r\n    }\r\n  }\r\n}\r\n\r\nconst da = new DynamicAdapt(\"max\");\r\nda.init();\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/dynamic_adaptive.js?");

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n// document.querySelector('.wrapper').classList.add('loaded');\r\n\r\nfunction ibg(){\r\n    const ibgs = document.querySelectorAll('.ibg');\r\n    ibgs.forEach(function(value){\r\n        if(value.querySelector('img')){\r\n            value.style.cssText = `background-image: url(${value.querySelector('img').getAttribute('src')})`;\r\n        }\r\n    });\r\n}\r\n\r\nibg();\r\n\r\n// export default ibg;\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/ibg.js?");

/***/ }),

/***/ "./src/js/basic/localizationData.js":
/*!******************************************!*\
  !*** ./src/js/basic/localizationData.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst localizationData = {\r\n  '.main__title-luxery': {\r\n    'ukr': 'Тільки ексклюзивне',\r\n    'ru': 'Только эксклюзивные',\r\n    'en': 'Exclusive only',\r\n  },\r\n  '.main__title-general': {\r\n    'ukr': 'Лоти під аукціон і вільного продажу',\r\n    'ru': 'Лоты под аукцион и свобоДную продажу',\r\n    'en': 'Lots for auction and free sale',\r\n  },\r\n  '.main__text': {\r\n    'ukr': 'Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний і автоматизований сервіс з купівлі і продажу, а також виставлення лотів на аукціон, надаємо особисті кабінети, а також надаємо сопутствубщіе послуги з продажем рідкісних і дорогих речей',\r\n    'ru': 'Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный и автоматизированный сервис по покупке и продаже, а также выставлению лотов на аукцион, предоставляем личные кабинеты, а также оказываем сопутствубщие услуги с продажей редких и дорогих вещейу',\r\n    'en': 'We collect an exclusive audience and exclusive lots, provide a convenient and automated service for buying and selling, as well as placing lots for an auction, provide personal accounts, and also provide related services with the sale of rare and expensive items.',\r\n  },\r\n  '.main__button-span': {\r\n    'ukr': 'Приєднається',\r\n    'ru': 'Присоединится',\r\n    'en': 'Join',\r\n  },\r\n  '.region__span': {\r\n    'ukr': 'Вибір Регіону',\r\n    'ru': 'Выбор Региона',\r\n    'en': 'Region Selection',\r\n  },\r\n  '.header__menu-item-link': {\r\n    'ukr': ['Головна', 'Аукціон', 'Проект', 'Партнери', 'Контакти'],\r\n    'ru': ['Главная', 'Аукцион', 'О проекте', 'Партнерам', 'Контакты'],\r\n    'en': ['Main', 'Auction', 'Project', 'Partners', 'Contacts'],\r\n  },\r\n  '.lots__title-luxery': {\r\n    'ukr': 'Популярні',\r\n    'ru': ' Популярные',\r\n    'en': 'Popular',\r\n  },\r\n  '.lots__title-general': {\r\n    'ukr': 'лоти Під аукціон',\r\n    'ru': 'лоты Под аукцион',\r\n    'en': 'lots Under auction',\r\n  },\r\n  '.price__title': {\r\n    'ukr': ['Поточна ставка', 'Поточна ставка', 'Поточна ставка'],\r\n    'ru': ['Текущая ставка', 'Текущая ставка', 'Текущая ставка'],\r\n    'en': ['Current rate', 'Current rate', 'Current rate'],\r\n  },\r\n  '.lots__button-span': {\r\n    'ukr': ['ПІДНЯТИ СТАВКУ', 'ПІДНЯТИ СТАВКУ', 'ПІДНЯТИ СТАВКУ'],\r\n    'ru': ['ПОДНЯТЬ СТАВКУ', 'ПОДНЯТЬ СТАВКУ', 'ПОДНЯТЬ СТАВКУ'],\r\n    'en': ['RAISE BET', 'RAISE BET', 'RAISE BET'],\r\n  },\r\n  '.header-lots__header-span': {\r\n    'ukr': 'всі лоти',\r\n    'ru': 'Все лоты',\r\n    'en': 'All lots',\r\n  },\r\n  '.kind__title': {\r\n    'ukr': ['Годинники', 'Ювелірні Вироби', 'Автотранспорт і човни', 'Аксуссуари', 'Нерухомість', 'Нерухомість', 'Одяг та взуття', 'Предмети мистецтва', 'алкоголю і їжа'],\r\n    'ru': ['Часы', 'Ювелирные Изделия', 'Автотранспорт и лодки', 'Аксуссуары', 'Недвижимость', 'Недвижимость', 'Одежда и обувь', 'Предметы искусства', 'АЛкоголь и еда'],\r\n    'en': ['Watches', 'Jewelry', 'Vehicles and Boats', 'Accessories', 'Real Estate', 'Real Estate', 'Clothes and Shoes', 'Objects of Art', 'Alcohol and Food'],\r\n  },\r\n  '.about__container-p': {\r\n    'ukr': ['Ми раді вітати вас на унікальній Лакшері аукціоні, тут ви зможете знайти гідні для себе лоти. Аукціон з продажу нерухомості в багатьох розвинених країнах являюется основним інструментом купівлі-продажу комерційної, житлової, і муніципальної нерухомості, в тому числі квартир. Загальний обсяг угод в світі на аукціонах з продажу нерухомості варіюється від 30% до 80%. Для Росії аукціон нерухомості є відносно новим і знаходить все більшу популярність. ',' Ми раді вітати вас на унікальній Лакшері аукціоні, тут ви зможете знайти гідні для себе лоти. Аукціон з продажу нерухомості в багатьох розвинених країнах являюется основним інструментом купівлі-продажу комерційної, житлової, і муніципальної нерухомості, в тому числі квартир. Загальний обсяг угод в світі на аукціонах з продажу нерухомості варіюється від 30% до 80%. Для Росії аукціон нерухомості є відносно новим і знаходить все більшу популярність. ',' Муніципальної нерухомості, в тому числі квартир. Загальний обсяг угод в світі на аукціонах з продажу нерухомості варіюється від 30% до 80%. '],\r\n    'ru': ['Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%. Для России аукцион недвижимости является относительно новым и обретает все большую популярность.', 'Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%. Для России аукцион недвижимости является относительно новым и обретает все большую популярность.', 'Муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%.'],\r\n    'en': ['We are glad to welcome you to the unique Luxury Auction, here you can find worthy lots for yourself. The real estate auction in many developed countries is the main instrument for the sale and purchase of commercial, residential, and municipal real estate, including apartments. The total volume of transactions in the world at real estate auctions varies from 30% to 80%. For Russia, the real estate auction is relatively new and is gaining more and more popularity. ', 'The real estate auction in many developed countries is the main instrument for the sale and purchase of commercial, residential, and municipal real estate, including apartments. The total volume of transactions in the world at real estate auctions varies from 30% to 80%. For Russia, the real estate auction is relatively new and is gaining more and more popularity. ',' Municipal real estate, including apartments. The total volume of transactions in the world at auctions for the sale of real estate varies from 30% to 80%. '],\r\n  },\r\n  '.service__title-luxery': {\r\n    'ukr': 'Додаткові',\r\n    'ru': 'Дополнительные',\r\n    'en': 'Additional',\r\n  },\r\n  '.service__title-general': {\r\n    'ukr': 'послуги',\r\n    'ru': 'услуги',\r\n    'en': 'services',\r\n  },\r\n  '.service__title': {\r\n    'ukr': ['Експертна оцінка', 'Замовлення деталей', 'Ремонт та реставрації'],\r\n    'ru': ['Экспертная оценка', 'Заказ комплектующих', 'Ремонт и реставраци'],\r\n    'en': ['Expert assessment', 'Ordering components', 'Repair and restoration'],\r\n  },\r\n  '.service__text': {\r\n    'ukr': ['Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний', 'Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний', 'Ми збираємо ексклюзивну публіку і ексклюзивні лоти, даємо зручний'],\r\n    'ru': ['Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный ', 'Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный', 'Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный'],\r\n    'en': ['We collect an exclusive audience and exclusive lots, give a convenient one', 'We collect an exclusive public and exclusive lots, give a convenient one', 'We collect an exclusive audience and exclusive lots, give a convenient one'],\r\n  },\r\n  '.service__link': {\r\n    'ukr': ['Детальніше', 'Детальніше', 'Детальніше'],\r\n    'ru': ['Подробнее', 'Подробнее', 'Подробнее'],\r\n    'en': ['More', 'More', 'More'],\r\n  },\r\n  '.quotes__title-luxery': {\r\n    'ukr': 'Інтересні',\r\n    'ru': 'Интересные',\r\n    'en': 'Interesting',\r\n  },\r\n  '.quotes__title-general': {\r\n    'ukr': 'Цитата',\r\n    'ru': 'ЦитатЫ',\r\n    'en': 'Quotes',\r\n  },\r\n  '.quotes__text': {\r\n    'ukr': '«Легше обдурити людей, ніж переконати їх в тому, що вони обдурені»',\r\n    'ru': '«Легче одурачить людей, чем убедить их в том, что они одурачены»',\r\n    'en': '\"It is easier to fool people than to convince them that they are fooled.\"',\r\n  },\r\n  '.quotes__auther': {\r\n    'ukr': 'Марк Твен',\r\n    'ru': 'Марк Твен',\r\n    'en': 'Mark Twain',\r\n  },\r\n  '.events__title-text': {\r\n    'ukr': ['Новини', 'Події', 'Підписка'],\r\n    'ru': ['Новости', 'Событи', 'Подписка'],\r\n    'en': ['News', 'Events', 'Subscription'],\r\n  },\r\n  '.news__title': {\r\n    'ukr': ['Унікальною Лакшері аукціоні, тут ви зможете знайти', 'Гідні для себе лоти', 'Унікальною Лакшері аукціоні, тут ви зможете знайти'],\r\n    'ru': ['Уникальной Лакшери аукционе, здесь вы сможете найти', 'Достойные для себя лоты', 'Уникальной Лакшери аукционе, здесь вы сможете найти'],\r\n    'en': ['Unique Laksheri auctions, here you can know', 'Good luck for yourself', 'Unique Laksheri auctions, here you can know'],\r\n  },\r\n  '.news__text': {\r\n    'ukr': ['Продаж товарів, цінних паперів, майна підприємств, творів мистецтва та інших об`єктів, що ...', 'Майна підприємств, творів мистецтва та інших об`єктів, творів редпріятіе, творів мистецтв ...', 'Продаж товарів, цінних паперів, майна підприємств, творів мистецтва та інших об`єктів, що ... '],\r\n    'ru': ['Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...', 'Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств...', 'Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...'],\r\n    'en': ['Sale of goods, securities, property of enterprises, works of art and other objects, which ...', 'Property of enterprises, works of art and other objects, works of enterprises, works of art ...', 'Sale of goods, securities, property businesses, works of art and other objects that ... '],\r\n  },\r\n  '.occasion__title': {\r\n    'ukr': ['Гідні для себе лоти', 'Унікальною Лакшері аукціоні, тут ви зможете знайти'],\r\n    'ru': ['Достойные для себя лоты', 'Уникальной Лакшери аукционе, здесь вы сможете найти'],\r\n    'en': ['Worthy lots for yourself', 'Unique Luxury Auction, here you can find'],\r\n  },\r\n  '.occasion__text': {\r\n    'ukr': ['Власність підприємств, витвори мистецтва та інші предмети, твори підприємств, витвори мистецтва Продаж товарів, цінних паперів, майно підприємств, витвори мистецтва та інші предмети, які ...', 'Власність підприємств, витвори мистецтва та інші предмети, твори підприємств, твори мистецтва Продаж товарів, цінних паперів, майна підприємств, творів мистецтва та інших предметів, які ... '],\r\n    'ru': ['Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...', 'Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая...'],\r\n    'en': ['Property of enterprises, works of art and other objects, works of enterprises, works of art Sale of goods, securities, property of enterprises, works of art and other objects, which ...', 'Property of enterprises, works of art and other objects, works of enterprises, works arts Sale of goods, securities, property of enterprises, works of art and other objects, which ... '],\r\n  },\r\n  '.supcription__text': {\r\n    'ukr': 'Для отримання повідомлень про нові пропозиції, введіть адресу своєї електронної пошти',\r\n    'ru': 'Для получения уведомлений о новых предложениях, введите адрес своей электронной почты',\r\n    'en': 'To receive notifications of new offers, enter your email address',\r\n  },\r\n  '.footer__menu-item-a': {\r\n    'ukr': ['Головна', 'Аукціон', 'Про проект', 'Партнерам', 'Контакти', 'Новини', 'FAQ', 'Реклама', 'Угода', 'Реєстрація', 'Послуги'],\r\n    'ru': ['Главная', 'Аукцион','О проекте', 'Партнерам','Контакты', 'Новости','FAQ', 'Реклама','Соглашение', 'Регистрация','Услуги'],\r\n    'en': ['Main', 'Auction', 'About the project', 'For partners', 'Contacts', 'News', 'FAQ', 'Advertising', 'Agreement', 'Registration', 'Services'],\r\n  },\r\n  '.footer__rules': {\r\n    'ukr': 'Всі права захищені © 2014',\r\n    'ru': 'Все права защищены © 2014',\r\n    'en': 'All rights reserved © 2014',\r\n  },\r\n  '.callback__text-a': {\r\n    'ukr': 'Зворотній зв`язок',\r\n    'ru': 'Обратная связь',\r\n    'en': 'Feedback',\r\n  },\r\n  '.forms__mail-input': {\r\n    'ukr': 'Ваш e-mail',\r\n    'ru': 'Ваш e-mail',\r\n    'en': 'Your e-mail',\r\n  },\r\n  '.sub-menu-item-span': {\r\n    'ukr': ['Особистий кабінет', 'Мої ставки', 'Мої лоти'],\r\n    'ru': ['Личный кабине', 'Мои ставки', 'Мои лоты'],\r\n    'en': ['My Account', 'My Bets', 'My Lots'],\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localizationData);\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/localizationData.js?");

/***/ }),

/***/ "./src/js/modules/arrow.js":
/*!*********************************!*\
  !*** ./src/js/modules/arrow.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile.js */ \"./src/js/basic/checkMobile.js\");\n\r\n\r\nconst arrow = () => {\r\n    const hr = document.querySelector(\".header__region\")\r\n    const hu = document.querySelector(\".header__user\")\r\n    const arrowRegion = document.querySelector(\".region__arrow\"),\r\n        arrowUser = document.querySelector(\".user__arrow\")\r\n    const subMenuRegion = document.querySelector(\".region__sub-menu\")\r\n    const subMenuUser = document.querySelector(\".user__sub-menu\")\r\n    const arrowArr = [arrowRegion, arrowUser]\r\n    const subMenuArr = [subMenuRegion, subMenuUser]\r\n\r\n    if (_basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].any()) {\r\n        document.body.classList.add(\"_touch\")\r\n        hr.classList.add(\"nohover\")\r\n        hu.classList.add(\"nohover\")\r\n\r\n        arrowRegion.addEventListener(\"click\", () => {\r\n            if (arrowRegion.classList.contains(\"_active\")) {\r\n                arrowRegion.classList.remove(\"_active\")\r\n            } else {\r\n                clearActive()\r\n                arrowRegion.classList.add(\"_active\")\r\n            }\r\n            changeValues(subMenuArr, arrowArr)\r\n        })\r\n\r\n        arrowUser.addEventListener(\"click\", () => {\r\n            if (arrowUser.classList.contains(\"_active\")) {\r\n                arrowUser.classList.remove(\"_active\")\r\n            } else {\r\n                clearActive()\r\n                arrowUser.classList.add(\"_active\")\r\n            }\r\n            changeValues(subMenuArr, arrowArr)\r\n        })\r\n\r\n        function clearActive() {\r\n            const arrows = document.querySelectorAll(\".menu__arrow\")\r\n            arrows.forEach((arrow) => {\r\n                if (arrow.classList.contains(\"_active\")) {\r\n                    arrow.classList.remove(\"_active\")\r\n                }\r\n            })\r\n        }\r\n\r\n        function changeValues(subMenu, arrows) {\r\n            arrows.forEach((arrow, index) => {\r\n                if (document.documentElement.clientWidth < 810) {\r\n                    if (arrow.classList.contains(\"_active\")) {\r\n                        subMenu[index].style.display = \"block\"\r\n                    } else {\r\n                        subMenu[index].style.display = \"none\"\r\n                    }\r\n                } else {\r\n                    if (arrow.classList.contains(\"_active\")) {\r\n                        subMenu[index].style.visibility = \"visible\"\r\n                        subMenu[index].style.opacity = \"1\"\r\n                    } else {\r\n                        subMenu[index].style.visibility = \"hidden\"\r\n                        subMenu[index].style.opacity = \"0\"\r\n                    }\r\n                }\r\n            })\r\n        }\r\n    } else {\r\n        document.body.classList.add(\"_pc\")\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrow);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/arrow.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = (header_burger, header_menu) => {\r\n    const burger = document.querySelector(header_burger),\r\n        menu = document.querySelector(header_menu)\r\n\r\n    burger.addEventListener(\"click\", () => {\r\n        toggeBurget()\r\n    })\r\n\r\n    menu.addEventListener(\"click\", (e) => {\r\n        if (\r\n            e.target.closest(\".header__menu-item-link\") ||\r\n            e.target.closest(\".footer__menu-item-a\") ||\r\n            !e.target.closest(\".header__menu\")\r\n        ) {\r\n            toggeBurget()\r\n        }\r\n    })\r\n\r\n    function toggeBurget() {\r\n        burger.classList.toggle(\"_active\")\r\n        menu.classList.toggle(\"_active\")\r\n        document.body.classList.toggle(\"_lock\")\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/checkemail.js":
/*!**************************************!*\
  !*** ./src/js/modules/checkemail.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regulars_check_email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regulars/check-email.js */ \"./src/js/modules/regulars/check-email.js\");\n\r\n\r\nconst checkMail = (input, trigger) => {\r\n    const btns = document.querySelectorAll(trigger)\r\n\r\n    btns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", (e) => {\r\n            e.preventDefault()\r\n\r\n            const mail = btn.parentElement.querySelector(input)\r\n            const borders = document.querySelector(\".forms__mail\")\r\n\r\n            if (!(0,_regulars_check_email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mail)) {\r\n                borders.style.border = \"3px solid red\"\r\n                setTimeout(function () {\r\n                    borders.style.border = \"3px solid #bb9c66\"\r\n                }, 1500)\r\n            } else {\r\n                mail.value = \"\"\r\n                borders.style.border = \"3px solid #bb9c66\"\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkMail);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/checkemail.js?");

/***/ }),

/***/ "./src/js/modules/header-height.js":
/*!*****************************************!*\
  !*** ./src/js/modules/header-height.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerH = (header, header_inner) => {\r\n  const head = document.querySelector(header);\r\n  const headerInner = Array.from(head.querySelector(header_inner).children);\r\n\r\n\r\n  if(head.clientHeight > 75){\r\n    for(let i = 0; i < headerInner.length ; i++){\r\n      headerInner[i].style.cssText += ' align-self: center';\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerH);\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/header-height.js?");

/***/ }),

/***/ "./src/js/modules/localization.js":
/*!****************************************!*\
  !*** ./src/js/modules/localization.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction localization(data){\r\n  for(let key in data){\r\n    const lang = getElem(key).dataset.loc;\r\n    if(checkList(key)){\r\n      setTranslateOfItems(data[key][lang], key);\r\n    } else {\r\n      setTranslate(data[key][lang], key);\r\n    }\r\n    if(checkInput(key)){\r\n      setInputTranslate(data[key][lang], key);\r\n    }\r\n\r\n  }\r\n}\r\n\r\nfunction getElem(key){\r\n  const elem = document.querySelector(key);\r\n  return elem;\r\n}\r\nfunction getElemsOfMenu(key){\r\n  const elems = document.querySelectorAll(key + '[data-item]');\r\n  return elems;\r\n}\r\nfunction setTranslateOfItems(language, key) {\r\n  getElemsOfMenu(key).forEach((item, index) => {\r\n    item.textContent = language[index];\r\n  });\r\n}\r\n\r\nfunction setTranslate(language, key){\r\n  getElem(key).textContent = language;\r\n}\r\nfunction setInputTranslate(language, key){\r\n  getElem(key).setAttribute('placeholder', `${language}`)\r\n}\r\nfunction checkList(key){\r\n  if(getElem(key).getAttribute('data-item')){ return true; } else { return false; }\r\n}\r\n\r\nfunction checkInput(key){\r\n  if(getElem(key).getAttribute('name')){ return true; } else { return false; }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localization);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/localization.js?");

/***/ }),

/***/ "./src/js/modules/raisebet.js":
/*!************************************!*\
  !*** ./src/js/modules/raisebet.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst raise = (triggers_btn, bet) => {\r\n  const triggers = document.querySelectorAll(triggers_btn);\r\n\r\n  triggers.forEach(trigger => {\r\n    trigger.addEventListener('click', () => {\r\n      const count = trigger.parentElement.querySelector('.price__count');\r\n      raiseBet(bet, count);\r\n    });\r\n  });\r\n\r\n  function raiseBet(bet, count_block){\r\n    count_block.textContent = addGap(getSum(count_block, bet));\r\n  }\r\n\r\n  function getSum(count, bet){\r\n    return Number(count.textContent.replace(/\\s/g, '')) + bet;\r\n  }\r\n  function addGap(num){\r\n\r\n    let string = String(num);\r\n    let arrStr = string.split('');\r\n    let arrStr2 = [...arrStr];\r\n    let counter = 1;\r\n    for(let i = arrStr.length - 1; i >= 0 ; i--){\r\n\r\n      if(counter === 3 && i - 1 >= 0){\r\n        let newArr = arrStr.splice(0, i);\r\n        newArr.push(' ');\r\n        arrStr2 = newArr.concat(arrStr);\r\n        arrStr = arrStr2;\r\n        counter = 1;\r\n        i--;\r\n      }\r\n      counter++;\r\n    }\r\n    return arrStr2.join('');\r\n  }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (raise);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/raisebet.js?");

/***/ }),

/***/ "./src/js/modules/regulars/check-email.js":
/*!************************************************!*\
  !*** ./src/js/modules/regulars/check-email.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction email_test(input) {\r\n\tif(input.value !== ''){\r\n\t\treturn /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(input.value);\r\n\t} else {\r\n\t\treturn false;\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (email_test);\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/regulars/check-email.js?");

/***/ }),

/***/ "./src/js/modules/setLocalization.js":
/*!*******************************************!*\
  !*** ./src/js/modules/setLocalization.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basic_localizationData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/localizationData.js */ \"./src/js/basic/localizationData.js\");\n/* harmony import */ var _localization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization.js */ \"./src/js/modules/localization.js\");\n\r\n\r\n\r\nconst elementLocalization = document.querySelectorAll(\"[data-loc]\")\r\nconst selectLocalization = document.querySelectorAll(\".region__sub-menu-item\")\r\nlet language = \"ukr\"\r\n\r\nselectLocalization.forEach((select) => {\r\n    select.addEventListener(\"click\", function () {\r\n        language = select.dataset.value\r\n        setLang(language)\r\n        ;(0,_localization_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_basic_localizationData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    })\r\n})\r\n\r\n;(0,_localization_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_basic_localizationData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\r\nfunction setLang(language) {\r\n    elementLocalization.forEach((elem) => {\r\n        elem.setAttribute(\"data-loc\", language)\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/setLocalization.js?");

/***/ }),

/***/ "./src/js/modules/slowAnchorMove.js":
/*!******************************************!*\
  !*** ./src/js/modules/slowAnchorMove.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slowmotion = (link) => {\r\n    const links = document.querySelectorAll(link)\r\n    console.log(links)\r\n\r\n    for (let anchor of links) {\r\n        anchor.addEventListener(\"click\", (e) => {\r\n            e.preventDefault()\r\n            const blockID = anchor.getAttribute(\"href\").substr(1)\r\n\r\n            document.getElementById(blockID).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\",\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slowmotion);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/slowAnchorMove.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (timers, endtime) => {\r\n  const getTimeRemaining = (endtime) => {\r\n    const t = Date.parse(endtime) - Date.parse(new Date()),\r\n          seconds = Math.floor((t/1000) % 60),\r\n          minutes = Math.floor((t/1000/60) % 60),\r\n          hours = Math.floor((t/(1000 * 60 * 60)) % 24),\r\n          days = Math.floor((t/(1000 * 60 * 60 * 24)));\r\n    return {\r\n      'total': t,\r\n      'days': days,\r\n      'hours': hours,\r\n      'minutes': minutes,\r\n      'seconds': seconds\r\n    };\r\n  };\r\n\r\n  const setClock = (timer, endtime) => {\r\n    console.log(timer, endtime);\r\n    const days = timer.querySelector('#days'),\r\n          hours = timer.querySelector('#hours'),\r\n          minutes = timer.querySelector('#minutes'),\r\n          seconds = timer.querySelector('#seconds'),\r\n          timeInterval = setInterval(updateClock, 1000);\r\n    updateClock();\r\n    function updateClock() {\r\n      const t = getTimeRemaining(endtime);\r\n\r\n      days.textContent = t.days;\r\n      hours.textContent = t.hours;\r\n      minutes.textContent = t.minutes;\r\n      seconds.textContent = t.seconds;\r\n\r\n      if(t.total <= 0){\r\n        days.textContent = \"0\";\r\n        hours.textContent = \"0\";\r\n        minutes.textContent = \"0\";\r\n        seconds.textContent = \"0\";\r\n\r\n        clearInterval(timeInterval);\r\n      }\r\n\r\n    }\r\n\r\n  };\r\n\r\n  timers.forEach(timer => {\r\n    setClock(timer, endtime);\r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/timer.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;