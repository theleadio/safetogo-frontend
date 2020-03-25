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
    location : [  
    ],
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
            zoom: 8,
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
                        upVote: parseInt(resp[i]["upvote"]),
                        disableUpVote: false,
                        downVote: parseInt(resp[i]["downvote"]),
                        disableDownVote: false,
                        createdBy: (resp[i]["createdBy"])?resp[i]["createdBy"]:"SafeToGo",
                        img_url: (resp[i]["img_url"])?resp[i]["img_url"]:"../helmet.png"
                    },
                    icon: state.existMarker,
                    tmp:false,
                    create: false,
                    showPopUp: true,
                }
                state.location.push(dataPoint)
            }
        }
    },
    upVote(state, marker){
        marker.popup.upVote += 1;
        let index = state.location.findIndex(x => x.id === marker.id);
        marker.popup.disableUpVote = true;
        state.location[index] = marker
    },
    downVote(state, marker){
        marker.popup.downVote += 1;
        let index = state.location.findIndex(x => x.id === marker.id);
        marker.popup.disableDownVote = true;
        state.location[index] = marker
    },
    disableVote(state, votes){
        let i = null;
        for(let index in votes){
            i = state.location.findIndex(
                x => (
                    x.latlng[0] === votes[index]["lat"] &&
                    x.latlng[1] === votes[index]["lng"]
                )
            )
            if(i != -1){
                state.location[i]["popup"]["disableUpVote"] = (votes[index]["upvote"] === 1)? true : false;
                state.location[i]["popup"]["disableDownVote"] = (votes[index]["downvote"] === 1)? true : false;
            }
        }
    }
}
