import whiteIcon from "../img/svg/header/white.svg"
import blackIcon from "../img/svg/header/dark.svg"

const icon = document.getElementById("icon")

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) {
        icon.src = blackIcon
    } else {
        icon.src = whiteIcon
    }
})