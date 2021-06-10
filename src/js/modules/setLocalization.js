import localizationData from '../basic/localizationData';
import localization from './localization';

const elementLocalization = document.querySelectorAll('[data-loc]');
const selectLocalization = document.querySelectorAll('.region__sub-menu-item');
let language = 'ukr';

selectLocalization.forEach(select => {
  select.addEventListener('click', function() {
    language = select.dataset.value;
    setLang(language);
    localization(localizationData);
  });
});

localization(localizationData);

function setLang(language){
  elementLocalization.forEach(elem => {
    elem.setAttribute('data-loc', language);
  });
}