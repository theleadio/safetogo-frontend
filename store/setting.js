const defaultState = () => {
    return {
        openSidebar: false,
        searchSuggestion: false,
    }
};
export const state = () => defaultState();

export const getters = {
    getOpenSidebar: state => {
        return state.openSidebar;
    },
    getSearchSuggestion: state => {
        return state.searchSuggestion;
    }
};

export const mutations = {
    toggleSidebar(state){
        state.openSidebar = !state.openSidebar;
    },
    toggleContentWrapper(state){
        state.openSidebar = false;
    },
    openSearchSuggestion(state){
        state.searchSuggestion = true;
    },
    closeSearchSuggestion(state){
        state.searchSuggestion = false;
    }
};