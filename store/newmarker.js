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
        user_id: "",
        country:"",
        country_state:""
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
        else{
            state.lat = coordinate["lat"]
            state.lng = coordinate["lng"]
        }
    },
    setCountryState(state, country, country_state){
        state.country = country;
        state.country_state = country_state
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
    setUserDetails(state, resp){
        state.createdBy = resp["name"];
        state.user_id = resp["user_id"];
        state.email = resp["email"];
        state.img_url = resp["img_url"];
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
        state.createdBy = ""
        state.user_id = ""
        state.email = ""
        state.img_url = ""
    }
}