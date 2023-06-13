// import all modules' functions here.
import { generateParkArea } from "./parkareas.js"
import { generateGuests } from "./guests.js"
import { generateServiceLIst } from "./services.js"

// exports the body of the HTML, invoking modular functions.
export const CiderFalls = () => {
    return `
        <header class="header">
            <img id="header__logo" src="/images/tree-logo-final.png">
            <h1 id="header__title">Cider Falls Park</h1>
            <img id="header__logo" src="/images/tree-logo-final.png">
        </header>
        <p class="servicesList">
            Park services: ${generateServiceLIst()}
            </p>
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
            <p class="footer__info">123-456-7890</p>
            <p class="footer__info">ciderfalls@hotmail.com</p>
            <p class="footer__info">8006 East Quarry Ave, Rock River, WY 82083</p>
        </footer>
    `
}