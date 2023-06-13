import {CiderFalls} from "./CiderFalls.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CiderFalls()
}

renderAllHTML()