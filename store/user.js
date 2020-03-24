const defaultState = () => {
    return {
        profile:{
            id: "",
            name: "",
            img_url: "",
            email: "",
            safetogo_id: ""
        },
        login: false
    }
}
export const state = () => defaultState();

export const getter = {
    getUserProfile(state){
        return state.profile
    },
    isLogin(state){
        return state.login
    }
}

export const mutations = {
    signOut(state){
        Object.assign(state, defaultState())
    },
    loginUser(state, payload){
        state.profile.id = payload["id"];
        state.profile.name = payload["name"];
        state.profile.img_url = payload["img_url"];
        state.profile.email = payload["email"];
        state.login = true
    },
    updateLoginUserId(state, safetogo_id){
        state.profile.safetogo_id = safetogo_id
    }
}