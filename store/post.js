const defaultState = () => {
    return {
        latlng: {}
    }
}
export const state = defaultState();

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
    setContent(state, payload){
        state.title = payload["title"]
        state.tags = payload["tags"]
        state.content = payload["content"]
    },
    resetState (state) {
        // Merge rather than replace so we don't lose observers
        // https://github.com/vuejs/vuex/issues/1118
        Object.assign(state, defaultState())
      }
}