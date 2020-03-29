const defaultState = () => {
    return {
        keywordSuggestions: [],
    }
};

export const state = () => defaultState();

export const getters = {
    getKeywordSuggestions : state => {
        return state.keywordSuggestions
    }
}

export const mutations = {
    setKeywordSuggestions(state, keywords){
        state.keywordSuggestions = keywords
    },
    resetState (state) {
        Object.assign(state, defaultState())
    }
}
