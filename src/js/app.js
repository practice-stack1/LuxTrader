import headerH from "./modules/header-height.js"
import "./basic/dynamic_adaptive.js"
import burger from "./modules/burger.js"
import "./basic/ibg.js"
import arrow from "./modules/arrow.js"
import "./basic/dynamic_adaptive.js"
import "./modules/setLocalization.js"
import "./modules/localization.js"
import timer from "./modules/timer.js"
import raise from "./modules/raisebet.js"
import checkMail from "./modules/checkemail.js"
import slowmotion from "./modules/slowAnchorMove.js"

const deadline = "2022-12-31",
    timers = document.querySelectorAll(".time__count")

window.addEventListener("DOMContentLoaded", () => {
    headerH(".header", ".header__container")
    burger(".header__burger", ".header__menu-body")
    arrow()
    timer(timers, deadline)
    raise(".lots__button", 5000)
    checkMail(".forms__mail-input", ".forms__mail-btn")
    slowmotion("[href^='#']")
})
