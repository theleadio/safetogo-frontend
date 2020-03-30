const defaultState = () => {
    return {
        openSidebar: false,
        searchSuggestion: false,
        postForm: false,
        profileDropDown: false,
    }
};
export const state = () => defaultState();

export const getters = {
    getOpenSidebar: state => {
        return state.openSidebar;
    },
    getSearchSuggestion: state => {
        return state.searchSuggestion;
    },
    getPostForm: state => {
        return state.postForm;
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
    },
    togglePostForm(state){
        state.postForm = !state.postForm;
    },
    toggleProfileDropDown(state){
        state.profileDropDown = !state.profileDropDown;
    },
    resetState(state){
        Object.assign(state, defaultState())
    }
};