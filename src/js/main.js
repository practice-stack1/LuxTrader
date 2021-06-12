import headerH from './modules/header-height';
import './basic/dynamic_adaptive';
import burger from './modules/burger';
import './basic/ibg';
import arrow from './modules/arrow';
import './basic/dynamic_adaptive';
import './modules/setLocalization';
import './modules/localization';
import timer from './modules/timer';
import raise from './modules/raisebet';
import checkMail from './modules/checkemail';

const deadline = '2021-06-15',
      timers = document.querySelectorAll('.time__count');


window.addEventListener('DOMContentLoaded', () => {
  headerH('.header', '.header__container');
  burger('.header__burger', '.header__menu-body');
  arrow();
  timer(timers, deadline);
  raise('.lots__button', 5000);
  checkMail('.forms__mail-input', '.forms__mail-btn');
});