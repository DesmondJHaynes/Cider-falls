import { getParkAreaServices, getParkAreas, getServices } from "./database.js"

const services = getServices()
const parkAreaServices = getParkAreaServices()
const parkAreas = getParkAreas()


export const generateServiceLIst = () => {
    let html = []

    for (const service of services) {
        html.push(`<span id="services--${service.id}"> ${service.name}</span>`)
    }

    const finalHtml = html.join(", ")
    return finalHtml
}




document.addEventListener("click", event => {

    if (event.target.id.startsWith("services")) {
        console.log("yes")
        const [,serviceId] = event.target.id.split("--")
        
        let foundServiceId
        let serviceName
        for (const service of services) {
            if (parseInt(serviceId) === service.id) {
                foundServiceId = service.id
                serviceName = service.name
            } 
        }
        let areaIdArr =[]
        for (const parkAreaService of parkAreaServices) {
            if (parkAreaService.serviceId === foundServiceId) {
                areaIdArr.push(parkAreaService.areaId)
            }
        }
        let parkAreaNames = []
        for (const parkArea of parkAreas) {
            if (areaIdArr.includes(parkArea.id)) {
                parkAreaNames.push(parkArea.name)
            }
        }

        const AreaString = parkAreaNames.join(", ")

        window.alert(`${serviceName} is available in: ${AreaString}`)
    }
})