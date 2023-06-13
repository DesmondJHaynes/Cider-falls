
const guests = getGuests()


//option A
const generateGuests = () => {
    let html = `<ul>`
    
    const guestList = guests.map((guest)=>{
        return `<li>${guest.name}</li>`
    })

    html += `${guestList.join("")} </ul>`
}


//option B
const generateGuests1 = () => {
    
    const guestList = guests.map((guest)=>{
        return `<li>${guest.name}</li>`
    })

    return guestList.join("")
}