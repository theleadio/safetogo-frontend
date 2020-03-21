export const state = () => ({
    existMarker: {
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    searchMarker :{
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    userMarker :{
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    location : [
        // {
        // id:"penang",
        // latlng:[5.4164, 100.3327],
        // tooltip: {
        //     content:"Penang"          
        // },
        // popup:{
        //     show: false,
        //     content: "welcome"
        // },
        // icon: {
        //     iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
        //     shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
        // },
        // create: false
        // },
        // {
        // id:"permatang-pauh",
        // latlng: [5.4111, 100.4133],
        // tooltip: {
        //     content:"Permatang Pauh"          
        // },
        // popup:{
        //     show: false,
        //     content: "welcome"
        // },
        // icon: {
        //     iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
        // shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
        // },
        // create: false
        // }
    ],
    focus : {
        zoom: 8,
        location:{lon: 0.0,lat:0.0}
    },
    searchMarker :{
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    }
})

export const getter = {
    get_location(state){
        return state.location
    }
}

export const mutations = {
    updateLocation (state, resp){
        state.location.push(
            {   
                id: resp[0]["address"]["road"],
                latlng: [resp[0]["lat"],resp[0]["lon"]],
                tooltip: {
                    content: resp[0]["display_name"]
                },
                popup:{
                    content: resp[0]["display_name"],
                    show:true
                },
                icon: state.searchMarker,
                tmp: false,
                create: true
            }
        );
        state.focus = {
            zoom: 14,
            location: {lon: resp[0]["lon"],lat:resp[0]["lat"]}
        }
    },
    setUserLocation(state, resp){
        state.location.push(
            {
                id: resp[0]["address"]["road"],
                latlng: [resp[0]["lat"],resp[0]["lon"]],
                tooltip: {
                    content: resp[0]["display_name"]
                },
                popup:{
                    content: resp[0]["display_name"],
                    show:true
                },
                icon: state.userMarker,
                tmp:false,
                create: false
            }
        );
        state.focus = {
            zoom: 14,
            location: {lon: resp[0]["lon"],lat:resp[0]["lat"]}
        }
    },
    addTmpLocation(state, resp){
        let tmpLocation = resp;
        tmpLocation["tmp"] = true
        tmpLocation["icon"] = state.searchMarker
        tmpLocation["create"] = true
        console.log(tmpLocation)
        state.location.push(tmpLocation)
        console.log(state.location)
        state.focus = {
            zoom: 14,
            location: {lat:resp["latlng"][0],lon: resp["latlng"][1]}
        }
    },
    removeTmpLocation(state){
        for (let index in state.location){
            if (state.location[index]["tmp"]){
                state.location.splice(index, 1)
                break
            }
        }
    }
}
