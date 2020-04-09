const defaultState = () => {
    return {
        keyword:"",
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
    setKeyword(state, keyword){
        state.keyword = keyword
    },
    resetSuggestions(state){
        state.keywordSuggestions= []
    },
    resetState (state) {
        Object.assign(state, defaultState())
    }
}
