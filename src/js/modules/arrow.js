import isMobile from '../basic/checkMobile';

const arrow = () => {
  const hr = document.querySelector('.header__region');
  const hu = document.querySelector('.header__user');
  const arrowRegion = document.querySelector('.region__arrow'),
        arrowUser = document.querySelector('.user__arrow');
  const subMenuRegion = document.querySelector('.region__sub-menu');
  const subMenuUser = document.querySelector('.user__sub-menu');
  const arrowArr = [arrowRegion, arrowUser];
  const subMenuArr = [subMenuRegion, subMenuUser];

  if (isMobile.any()) {
    document.body.classList.add('_touch');
    hr.classList.add('nohover');
    hu.classList.add('nohover');

    arrowRegion.addEventListener('click', () => {

      if(arrowRegion.classList.contains('_active')){
        arrowRegion.classList.remove('_active');
      } else {
        clearActive();
        arrowRegion.classList.add('_active');
      }
      changeValues(subMenuArr, arrowArr);
    });

    arrowUser.addEventListener('click', () => {
      if(arrowUser.classList.contains('_active')){
        arrowUser.classList.remove('_active');
      } else {
        clearActive();
        arrowUser.classList.add('_active');
      }
      changeValues(subMenuArr, arrowArr);
    });

    function clearActive(){
      const arrows = document.querySelectorAll('.menu__arrow');
      arrows.forEach(arrow => {
        if(arrow.classList.contains('_active')){
          arrow.classList.remove('_active');
        }
      });
    }

    function changeValues(subMenu, arrows){
      arrows.forEach((arrow, index) => {
        if(document.documentElement.clientWidth < 810){
          if(arrow.classList.contains('_active')){
            subMenu[index].style.display = 'block';
          } else {
            subMenu[index].style.display = 'none';
          }
        } else {
          if(arrow.classList.contains('_active')){
            subMenu[index].style.visibility = 'visible';
            subMenu[index].style.opacity = '1';
          } else {
            subMenu[index].style.visibility = 'hidden';
            subMenu[index].style.opacity = '0';
          }
        }
      });
    }

  } else {
    document.body.classList.add('_pc');
  }

};

export default arrow;