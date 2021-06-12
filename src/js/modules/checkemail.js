import email_test from './regulars/check-email';

const checkMail = (input, trigger) => {
  const btns = document.querySelectorAll(trigger);


  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const mail = btn.parentElement.querySelector(input);
      const borders = document.querySelector('.forms__mail');

      if(!email_test(mail)){
        borders.style.border = '3px solid red';
        setTimeout(function() {
          borders.style.border = '3px solid #bb9c66';
        }, 1500);
      } else {
        mail.value = '';
        borders.style.border = '3px solid #bb9c66';
      }
    });
  });
};

export default checkMail;