const defaultState = () => {
    return {
        center:[0.0, 0.0],
        focusLevel: 14,
        // mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        mapUrl: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        markers: []
    }
};

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
            };
            state.markers.push(marker);
        }
    }
}