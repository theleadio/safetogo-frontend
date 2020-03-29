const defaultState = () => {
    return {
        title: "",
        locationName: "",
        source: "",
        content: "",
        lat: 0.0,
        lng: 0.0,
        createdBy: "",
        email: "",
        img_url: "",
        user_id: ""
    }
};

export const state = () => defaultState();

export const getters = {
    getContents(state){
        return state
    }
}

export const mutations = {
    setCoordinate(state, coordinate){
        if (coordinate instanceof Array) {
            state.lat = coordinate[0]
            state.lng = coordinate[1]
        }

        if (coordinate instanceof Object){
            state.lat = coordinate["lat"]
            state.lng = coordinate["lng"]
        }

    },

    setTitle(state, title){
        state.title = title
    },
    setLocationName(state, locationName){
        state.locationName = locationName
    },
    setSource(state, source){
        state.source = source
    },
    setContent(state, content){
        state.content = content
    },
    setUserDetails(state, user_id, email, img_url, name){
        state.name = name;
        state.user_id = user_id;
        state.email = email
        state.img_url = img_url
    },
    resetContent(state){
        state.title = ""
        state.locationName = ""
        state.source = ""
        state.content = ""
        state.lat = 0.0
        state.lng = 0.0
    },
    resetUser(state){
        state.name = ""
        state.user_id = ""
        state.email = ""
        state.img_url = ""
    }
}