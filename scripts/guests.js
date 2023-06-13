import {getGuests} from "./database.js"


const guests = getGuests()


export const generateGuests = () => {
    let html = `<ul>`
    
    const guestList = guests.map((guest)=>{
        return `<li>${guest.name}</li>`
    })

    html += `${guestList.join("")} </ul>`

    return html
}