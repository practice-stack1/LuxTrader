import headerH from './modules/header-height';
import './basic/dynamic_adaptive';
import burger from './modules/burger';
import './basic/ibg';
import arrow from './modules/arrow';
import './basic/dynamic_adaptive';
import './modules/setLocalization';
import './modules/localization';



window.addEventListener('DOMContentLoaded', () => {
  headerH('.header', '.header__container');
  burger('.header__burger', '.header__menu-body');
  arrow();
});