import headerH from './modules/header-height';
import './basic/dynamic_adaptive';
import burger from './modules/burger';
import './basic/ibg';
import arrow from './modules/arrow';


window.addEventListener('DOMContentLoaded', () => {
  headerH('.header', '.header__container');
  burger('.header__burger', '.header__menu-body');
  arrow();
});