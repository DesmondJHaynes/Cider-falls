const database = {
    guests: [
        {id: 1, name: "Ethan Anderson", areaId: 1},
        {id: 2, name: "Olivia Thompson", areaId: 2},
        {id: 3, name: "Liam Rodriguez", areaId: 3},
        {id: 4, name: "Ava Patel", areaId: 5},
        {id: 5, name: "Benjamin Wright", areaId: 6},
        {id: 6, name: "Sophia Nguyen", areaId: 1},
        {id: 7, name: "Henry Lewis", areaId: 2},
        {id: 8, name: "Charlotte Johnson", areaId: 3},
        {id: 9, name: "Alexander Brown", areaId: 4},
        {id: 10, name: "Mia Martinez", areaId: 5},
        {id: 11, name: "Noah Campbell", areaId: 6},
        {id: 12, name: "Isabella Turner", areaId: 1},
        {id: 13, name: "William Adams", areaId: 2},
        {id: 14, name: "Harper Jackson", areaId: 3},
        {id: 15, name: "James Wilson", areaId: 4},
        {id: 16, name: "Amelia White", areaId: 5},
        {id: 17, name: "Samuel Lee", areaId:6},
        {id: 18, name: "Abigail Harris", areaId: 1},
        {id: 19, name: "Daniel Robinson", areaId: 2},
        {id: 20, name: "Emily Clark", areaId: 3}
    ],
    parkAreas: [
        {id: 1, name: "Chamfort River"},
        {id: 2, name: "Lost Wolf Hiking Trail"},
        {id: 3, name: "Lodge", extra: "Hotel and Restaurant"},
        {id: 4, name: "Gander River"},
        {id: 5, name: "Campgrounds", extra: "Playground"},
        {id: 6, name: "Pine Bluffs Trails", extra: "Food Vendors"}
    ],
    services: [
        {id: 1, name: "rafting"},
        {id: 2, name: "canoeing"},
        {id: 3, name: "fishing"},
        {id: 4, name: "hiking"},
        {id: 5, name: "picnicking"},
        {id: 6, name: "rock climbing"},
        {id: 7, name: "lodging"},
        {id: 8, name: "parking"},
        {id: 9, name: "information"},
        {id: 10, name: "zip lines"}
    ],
    parkAreaServices: [
        {id: 1, areaId: 1, serviceId: 1},
        {id: 2, areaId: 1, serviceId: 2},
        {id: 3, areaId: 1, serviceId: 3},
        {id: 4, areaId: 2, serviceId: 4},
        {id: 5, areaId: 2, serviceId: 5},
        {id: 6, areaId: 2, serviceId: 6},
        {id: 7, areaId: 3, serviceId: 7},
        {id: 8, areaId: 3, serviceId: 8},
        {id: 9, areaId: 3, serviceId: 9},
        {id: 10, areaId: 3, serviceId: 5},
        {id: 11, areaId: 4, serviceId: 3},
        {id: 12, areaId: 4, serviceId: 4},
        {id: 13, areaId: 5, serviceId: 7},
        {id: 14, areaId: 5, serviceId: 8},
        {id: 15, areaId: 5, serviceId: 9},
        {id: 16, areaId: 6, serviceId: 4},
        {id: 17, areaId: 6, serviceId: 5},
        {id: 18, areaId: 6, serviceId: 10}
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaService => ({...parkAreaService}))
}
