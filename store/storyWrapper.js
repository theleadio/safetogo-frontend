export const state = () => ({
    stories: []
});

export const mutations = {
    set_stories(state, payload) {
        state.stories = payload
    }
}

export const getter = {
    get_stories(state){
        return state.stories
    }
}
