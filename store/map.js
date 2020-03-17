export const state = () => ({
    location : [{
        id:"penang",
        latlng:[5.4164, 100.3327],
        tooltip: {
            content:"welcome"          
        },
        popup:{
            show: false,
            content: "welcome"
        }
        },
        {
        id:"permatang-pauh",
        latlng: [5.4111, 100.4133],
        tooltip: {
            content:"welcome"          
        },
        popup:{
            show: false,
            content: "welcome"
        }
        }],
    focus : {
        zoom: 5,
    },
    currentLocation: {

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
                    content: resp[0]["display_name"]
                },
                popup:{
                    content: resp[0]["display_name"],
                    show:true
                }
            }
        ]
        state.focus = {
            zoom: 12,
            center: {lon: resp[0]["lat"],let:resp[0]["lon"]}
        }
    }
}
