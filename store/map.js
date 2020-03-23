export const state = () => ({
    existMarker: {
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    searchMarker :{
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    userMarker :{
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    focus : {
        zoom: 8,
        location:{lon: 0.0,lat:0.0}
    },
    searchMarker :{
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
    },
    leadMarker:{
        id: "TheLead",
        latlng: [3.152298, 101.622535],
        tooltip:{
            content: "Built by TheLead"
        },
        popup: {
            title: "SafeToGo.live",
            source: "https://thelead.io",
            details: "Community Project by LEAD (https://www.thelead.io), for further details please email edmund@thelead.io or drlau@thelead.io",
            show:true,
            upVote: 0,
            downVote: 0,
            createdBy: "SafeToGo by TheLEAD",
            img_url: "data:image/png;base64,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"
        },
        icon: {
            iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
        },
        tmp:false,
        create: false,
        showPopUp: true,
    },
    location : [  
    ],
})

export const getter = {
    get_location(state){
        return state.location
    }
}

export const mutations = {
    addLeadLocation (state){
        state.location.push(state.leadMarker);
    },
    updateLocation (state, resp){
        state.location.push(
            {   
                id: resp[0]["place_id"],
                latlng: [resp[0]["lat"],resp[0]["lon"]],
                tooltip: {
                    content: resp[0]["display_name"]
                },
                popup:{
                    title: resp[0]["display_name"],
                    show:true
                },
                icon: state.searchMarker,
                tmp: false,
                create: true,
                showPopUp: false,
            }
        );
        state.focus = {
            zoom: 10,
            location: {lon: resp[0]["lon"],lat:resp[0]["lat"]}
        }
    },
    setUserLocation(state, resp){
        state.location.push(
            {
                id: resp[0]["place_id"],
                latlng: [resp[0]["lat"],resp[0]["lon"]],
                tooltip: {
                    content: resp[0]["display_name"]
                },
                popup:{
                    title: resp[0]["display_name"],
                    show: false
                },
                icon: state.userMarker,
                tmp:false,
                create: false,
                showPopUp: false,
            }
        );
        state.focus = {
            zoom: 10,
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
        state.focus = {
            zoom: 15,
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
    },
    loadLocationData(state, resp){
        if(resp){
            for (let i in resp){
                resp[i]["lat"] = parseFloat(resp[i]["lat"])
                resp[i]["lng"] = parseFloat(resp[i]["lng"])
                let dataPoint = {
                    id: resp[i]["locationName"],
                    latlng: [ 
                        parseFloat(resp[i]["lat"]), 
                        parseFloat(resp[i]["lng"])
                    ],
                    tooltip:{
                        content: resp[i]["locationName"]
                    },
                    popup:{
                        title: resp[i]["title"],
                        source: resp[i]["source"],
                        show:true,
                        upVote: 0,
                        downVote: 0,
                        createdBy: (resp[i]["createdBy"])?resp[i]["createdBy"]:"SafeToGo",
                        img_url: (resp[i]["img_url"])?resp[i]["img_url"]:"~/assets/img/helmet.png"
                    },
                    icon: state.existMarker,
                    tmp:false,
                    create: false,
                    showPopUp: true,
                }
                state.location.push(dataPoint)
            }
        }
    }
}
