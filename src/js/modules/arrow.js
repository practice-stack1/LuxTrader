import isMobile from '../basic/checkMobile';

const arrow = () => {
  const hr = document.querySelector('.header__region');
  if (isMobile.any()) {
    document.body.classList.add('_touch');
    hr.classList.add('nohover');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle('_active');
        });
      }
    }

    hr.addEventListener('click', () => {
      const arrow = document.querySelector('.region__arrow'),
            subMenu = document.querySelector('.region__sub-menu');
      arrow.classList.toggle('_active');


      if(document.documentElement.clientWidth < 810){
        if(arrow.classList.contains('_active')){
          subMenu.style.display = 'block';
        } else {
          subMenu.style.display = 'none';
        }
      } else {
        if(arrow.classList.contains('_active')){
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

export default arrow;