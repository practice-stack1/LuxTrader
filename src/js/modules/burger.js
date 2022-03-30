const burger = (header_burger, header_menu) => {
    const burger = document.querySelector(header_burger),
        menu = document.querySelector(header_menu)

    burger.addEventListener("click", () => {
        toggeBurget()
    })

    menu.addEventListener("click", (e) => {
        if (
            e.target.closest(".header__menu-item-link") ||
            e.target.closest(".footer__menu-item-a") ||
            !e.target.closest(".header__menu")
        ) {
            toggeBurget()
        }
    })

    function toggeBurget() {
        burger.classList.toggle("_active")
        menu.classList.toggle("_active")
        document.body.classList.toggle("_lock")
    }
}

export default burger
