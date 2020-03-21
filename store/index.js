export const state = () => ({
    enableSearch: true,
    showCreateForm: false,
    showLoading: false,
    showLogin: false,
    showContentList: false
})

export const getter = {
    isSearch(state){
        return state.enableSearch
    },
    isCreateForm(state){
        return state.showCreateForm
    },
    isLoading(state){
        return state.isLoading
    },
    isLogin(state){
        return state.showLogin
    },
    isContentList(state){
        return state.showContentList
    }
}

export const mutations = {
    disableSearch(state){
        state.enableSearch = false
    },
    disableCreateForm(state){
        state.showCreateForm = false
    },
    disableLoading(state){
        state.isLoading = false
    },
    disableShowLogin(state){
        state.showLogin = false
    },
    disableContentList(state){
        state.showContentList = false
    },
    enableSearch(state){
        state.enableSearch = true
    },
    enableCreateForm(state){
        state.showCreateForm = true
    },
    enableLoading(state){
        state.isLoading = true
    },
    enableShowLogin(state){
        state.showLogin = true
    },
    enableContentList(state){
        state.showContentList = true
    }
}