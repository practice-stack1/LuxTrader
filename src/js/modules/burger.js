const burger = (header_burger, header_menu) => {
  const burger = document.querySelector(header_burger),
        menu = document.querySelector(header_menu);

  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  });

};

export default burger;