import { getGuests, getParkAreaServices, getParkAreas, getServices } from "./database.js"

const parkAreas = getParkAreas()
const parkAreaServices = getParkAreaServices()
const services = getServices()
const guests = getGuests()

export const generateParkArea = () => {
    let html = ``

        for (const area of parkAreas) {
            html += `
                <div class="area-card--${area.id}">
                <h2 id="area--${area.id}">${area.name}</h2>`

            if (area.extra) {
                html += `<h3 class="area-extra"> Area Attractions: ${area.extra}</h3>`
            }

            html += '<ul>'

            const serviceIdList = createServiceIdList(area)
            const serviceList = generateServices(serviceIdList)
            
            html += `${serviceList}</ul></div>`
        }
    return html
}

const createServiceIdList = (area) => {
    let serviceIdList = []

    for (const parkAreaService of parkAreaServices) {

        if (area.id === parkAreaService.areaId) {
            serviceIdList.push(parkAreaService.serviceId)
        } 
           
    }
    return serviceIdList
}


const generateServices = (serviceIdList) => {
    let html = ``
    for (const service of services) {
        if (serviceIdList.includes(service.id)) {
            html += `<li id="service--${service.id}">${service.name}</li>`
        }        
    }
    return html
}


document.addEventListener("click", event => {
    if (event.target.id.startsWith("area--")) {
        const [,areaId] = event.target.id.split("--")
        
        let guestlist = []

        for (const guest of guests) {
            if (parseInt(areaId) === guest.areaId) {
                guestlist.push(guest)
            }
        }

        const numberOfGuest = guestlist.length;
        window.alert(`There are ${numberOfGuest} guests here!`)
    }
})



// click area 
// display number of guests in area