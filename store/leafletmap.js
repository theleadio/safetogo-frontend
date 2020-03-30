const defaultState = () => {
    return {
        center:[0.0, 0.0],
        focusLevel: 8,
        // mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        mapUrl: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        markers: []
    }
};
const redMarker = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
const markerShadow = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
const blueMarker ="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"

export const state = () => defaultState();

export const mutations = {
    updateFocusLevel (state, focusLevel){
        state.focusLevel = focusLevel;
    },
    updateCenter (state, center){
        state.center = center
    },
    loadMarkers(state, resp){
        let marker = {}

        for (let index in resp){
            marker = {
                id: resp[index]["locationName"],
                latlng: [ 
                    parseFloat(resp[index]["lat"]), 
                    parseFloat(resp[index]["lng"])
                ],
                tooltip:{
                    content: resp[index]["locationName"]
                },
                popup:{
                    title: resp[index]["title"],
                    source: resp[index]["source"],

                    upVote: parseInt(resp[index]["upvote"]),
                    downVote: parseInt(resp[index]["downvote"]),

                    createdBy: resp[index]["createdBy"] ? resp[index]["createdBy"] : "SafeToGo",
                    img_url: resp[index]["img_url"] ? resp[index]["img_url"]: "../helmet.png",
                    createdAt: resp[index]["createdAt"] ? resp[index]["createdAt"] : null,
                },
                icon: redMarker,
                iconShadow: markerShadow,
                isNew:false
            };
            state.markers.push(marker);
        }
    },
    addClickMarker(state, latlng){
        state.markers.push({
            id:"What happened?",
            latlng:latlng,
            tooltip:{content:"What happened? Create a post by clicking this pin! (Login required)"},
            icon:blueMarker,
            iconShadow: markerShadow,
            isNew:true
        })
        state.center=latlng
    },
    addNewMarker(state, post){
        let marker = {
            id: post["locationName"],
            latlng: [ 
                post["lat"], 
                post["lng"]
            ],
            tooltip:{
                content: post["locationName"]
            },
            popup:{
                title: post["title"],
                source: post["source"],

                upVote: 0,
                downVote: 0,

                createdBy: post["createdBy"],
                img_url: post["img_url"],
                createdAt: post["reportedDate"],
            },
            icon: redMarker,
            iconShadow: markerShadow,
            isNew:false
        };
        state.markers.push(marker);
    },
    removeClickedMarker(state){
        let index = state.markers.findIndex(x => x.id === "What happened?");
        (index===-1) ? null : state.markers.splice(index, 1);
    }
}