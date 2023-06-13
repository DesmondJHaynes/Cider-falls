const parkAreas = getParkAreas()
const parkAreaServices = getParkAreaServices()
const services = getServices()

const generateParkArea = () => {
    let html = ``

        for (const area of parkAreas) {
            html += `
                <div class="area-card--${area.id}">
                <h2 id="area--${area.id}">${area.name}</h2>`

            if (area.extra) {
                html += `<h3 class="area-extra"> Area Attractions: ${area.extra}</h3>`
            }

            html += '<ul>'

            const serviceIdList = createServiceIdList()
            const serviceList = generateServices(serviceIdList)
            
            html += `${serviceList}</ul></div>`
        }
    return html
}

const createServiceIdList = () => {
    for (const parkAreaService of parkAreaServices) {
        let serviceIdList = []

        if (area.id === parkAreaService.areaId) {
            serviceIdList.push(parkAreaService.serviceId)
        } 
        
        return serviceIdList
    }
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