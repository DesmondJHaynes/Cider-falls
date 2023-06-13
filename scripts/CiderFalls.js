// import all modules' functions here.
import {generateParkArea} from "./parkareas.js"
import {generateGuests} from "./guests.js"

// exports the body of the HTML, invoking modular functions.
export const CiderFalls = () => {
    return `
        <header class="header">
            <img id="header__logo" src="">
            <h1 id="header__title">Cider Falls Park</h1>
        </header>
        <p class="servicesList">
            Park services: <span id="services--rafting">rafting, </span><span id="services--canoeing">canoeing, </span><span id="services--fishing">fishing, </span><span id="services--hiking">hiking, </span><span id="services--picnicking">picnicking, </span><span id="services--rockClimbing">rock climbing, </span><span id="services--lodging">lodging, </span><span id="services--parking">parking, </span><span id="services--information">information, </span><span id="services--zipLines">zip lines</span></p>
        <main>
            <article class="areas">
                <h2 id="areas__header">Park Areas</h2>
                <div class="areas__boxes">
                    ${generateParkArea()}
                </div>
            </article>
            <aside class="guestList">
                <h3 id="guestList__header">Current Park Guests</h2>
                <div class="guestList__list">
                    ${generateGuests()}
                </div>
            </aside>
        </main>
        <footer class="footer">
            <h4 id="footer__heading">Contact us</h4>
            <p class="footer__info">phone: 123-456-7890</p>
            <p class="footer__info">email: ciderfalls@hotmail.com</p>
            <p class="footer__info">address: 8006 East Quarry Ave, Rock River, WY 82083</p>
        </footer>
    `
}