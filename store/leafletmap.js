const defaultState = () => {
    return {
        center:[0, 0],
        focusLevel: 8,
        // mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        mapUrl: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        markers: {
            location:[]
        },
        summaryMarkers: [],
        caseMarkers: [],
        countryMarkers: []
    }
};
const redMarker = "../map/pinned.svg"
const blueMarker ="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
const yellowMarker = "../map/virus.svg"
const markerShadow = ""

export const state = () => defaultState();

export const mutations = {
    updateFocusLevel (state, focusLevel){
        state.focusLevel = focusLevel;
    },
    updateCenter (state, center){
        state.center = center
    },
    loadMarkers(state, resp){
        if (state.markers.location.length === 0){
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
                        content: resp[index]["title"],
                        source: resp[index]["source"],

                        upVote: parseInt(resp[index]["upvote"]),
                        downVote: parseInt(resp[index]["downvote"]),

                        createdBy: resp[index]["createdBy"] ? resp[index]["createdBy"] : "SafeToGo",
                        img_url: resp[index]["img_url"] ? resp[index]["img_url"]: "../helmet.png",
                        createdAt: resp[index]["createdAt"] ? resp[index]["createdAt"] : null,

                        disableUpVote: false,
                        disableDownVote: false
                    },
                    icon: redMarker,
                    iconShadow: markerShadow,
                    isNew:false,
                    reference:"location"
                };
                state.markers.location.push(marker);
            }
        }
    },
    loadCaseMarkers(state, cases){
        if(state.caseMarkers.length === 0){
            for (let i in cases){
                state.caseMarkers.push({
                    lat: cases[i]["lat"],
                    lng: cases[i]["lng"],
                    country: cases[i]["country"],
                    district: cases[i]["district"],
                    upvote: cases[i]["upvote"],
                    downvote: cases[i]["downvote"],
                    createdBy: cases[i]["createdBy"],
                    img_url: cases[i]["img_url"]?cases[i]["img_url"]:"../helmet.png",
                    locationName: cases[i]["locationName"],
                    content: cases[i]["content"],
                    icon: redMarker,
                    disableUpVote: false,
                    disableDownVote: false,
                    reference:"location",
                    case_id: cases[i]["id"]?cases[i]["id"]:-1
                })
            }
        }
    },
    loadSummaryMarkers(state, summary){
        if(state.summaryMarkers.length === 0){
            for (let i in summary){
                state.summaryMarkers.push({
                    confirmed: summary[i]["confirmed"],
                    country: summary[i]["country"],
                    created_at: summary[i]["created_at"],
                    death: summary[i]["death"],
                    district: summary[i]["district"],
                    createdBy: "SafeToGo",
                    img_url: "../helmet.png",
                    upvote: summary[i]["upvote"],
                    downvote: summary[i]["downvote"],
                    icon:yellowMarker,
                    disableUpVote: false,
                    disableDownVote: false,
                    reference: "summary",
                    case_id: summary[i]["id"]?summary[i]["id"]:-1
                });
            }
        }
    },
    resetMarkers(state){
        state.summaryMarkers = [];
        state.caseMarkers = [];
    },
    addClickMarker(state, latlng){
        state.markers.location.push({
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
                content: post["title"],
                source: post["source"],

                upVote: 0,
                downVote: 0,

                createdBy: post["createdBy"],
                img_url: post["img_url"],
                createdAt: post["reportedDate"],

                disableUpVote: false,
                disableDownVote: false
            },
            icon: redMarker,
            iconShadow: markerShadow,
            isNew:false
        };
        state.markers.location.push(marker);
    },
    removeClickedMarker(state){
        let index = state.markers.location.findIndex(x => x.id === "What happened?");
        (index===-1) ? null : state.markers.location.splice(index, 1);
    },
    upVote(state, marker){
        marker.upvote += 1;
        let index = -1;
        if(marker.reference === "location"){
            index = state.caseMarkers.findIndex(x => x.id === marker.id);
            if(index !== -1){  
                marker.disableUpVote = true;
                state.caseMarkers[index] = marker;
            }
        }else{
            index = state.summaryMarkers.findIndex(x => x.district === marker.district);
            if(index !== -1){  
                marker.disableUpVote = true;
                state.summaryMarkers[index] = marker;
            }
        }
    },
    downVote(state, marker){
        marker.downvote += 1;
        let index = -1;
        if(marker.reference === "location"){
            index = state.caseMarkers.findIndex(x => x.id === marker.id);
            if(index !== -1){  
                marker.disableDownVote = true;
                state.caseMarkers[index] = marker;
            }
        }else{
            index = state.summaryMarkers.findIndex(x => x.district === marker.district);
            if(index !== -1){  
                marker.disableDownVote = true;
                state.summaryMarkers[index] = marker;
            }
        }
    },
    disableVotes(state,votes){
        console.log("disableVotes");
        let i = null;
        for (let idx in votes){
            tmpMarkers = votes[idx]["reference"] === "summary"? state.summaryMarkers:state.caseMarkers;
            i = tmpMarkers.findIndex(
                x => (
                    (votes[idx]["reference"] === "summary")?
                        (x.district === votes[idx]["district"] && x.country === votes[idx]["country"]):
                            (x.case_id === votes[idx]["case_id"])
                )
            )
            (i != -1)? (
                (votes[idx]["upvote"] === 1)? (tmpMarkers[i]["disableUpVote"] = true) : (tmpMarkers[i]["disableDownVote"] = true)
            ): null;
            votes[idx]["reference"] === "summary"? state.summaryMarkers = tmpMarkers:state.caseMarkers = tmpMarkers;
        }
    }
}