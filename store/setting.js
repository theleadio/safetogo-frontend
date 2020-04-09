const defaultState = () => {
    return {
        openSidebar: false,
        searchSuggestion: true,
        postForm: false,
        profileDropDown: false,
        howToMessage: false,
        countryFilterCard: false,
        searchWrapperBg: false
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
    closePostForm(state){
        state.postForm = false;
    },
    closeProfileDropDown(state){
        state.profileDropDown = false;
    },
    togglePostForm(state){
        state.postForm = !state.postForm;
    },
    toggleProfileDropDown(state){
        state.profileDropDown = !state.profileDropDown;
    },
    resetState(state){
        Object.assign(state, defaultState());
    },
    toggleHowToMessage(state){
        state.howToMessage = !state.howToMessage
    },
    showSearchWrapperBg(state){
        state.searchWrapperBg = true
    },
    hideSearchWrapperBg(state){
        state.searchWrapperBg = false
    },
    showFilterCard(state){
        state.countryFilterCard = true
    },
    hideFilterCard(state){
        state.countryFilterCard = false
    }
};