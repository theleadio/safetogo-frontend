export const state = () => ({
    latlng: [],
    title: "",
    tags: [],
    created_date: new Date(),
    content: "",
    createStory: false
});

export const getter = {
    getLatLng(state){
        return state.latlng
    },
    getContent(state){
        return state
    }
}

export const mutations = {
    setLatLng (state, latlng){
        state.latlng = latlng
    },
    showPost (state){
        console.log("show post");
        state.createStory = true
    },
    hidePost (state){
        state.createStory = false
    },
    setContent(state, payload){
        state.title = payload["title"]
        state.tags = payload["tags"]
        state.content = payload["content"]
    }
}