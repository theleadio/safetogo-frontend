export const state = () => ({
    location : [{
        id:"penang",
        "latlng":[5.4164, 100.3327],
        "tooltip": {
            content:"welcome"          
        }
        },
        {
        id:"permatang-pauh",
        "latlng": [5.4111, 100.4133],
        "tooltip": {
            content:"welcome"          
        }
        }],
    focus_location : {
        zoom: 8,
        center: [5.4164, 100.3327],
    }
})

export const getter = {
    get_location(state){
        return state.location
    }
}

export const mutations = {
    set_location (state, resp){

        state.location = [
            {   
                id: resp[0]["address"]["road"],
                latlng: [resp[0]["lat"],resp[0]["lon"]],
                tooltip: {
                    content: "welcome"
                }
            }
        ]
    }
}
