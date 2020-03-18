export const state = () => ({
    profile:{
        id: "",
        name: "",
        img_url: "",
        email: ""
    },
    login: false
})

export const getter = {
    getUserProfile(state){
        return state.profile
    },
    isLogin(state){
        return state.login
    }
}

export const mutations = {
    loginUser(state, payload){
        state.profile.id = payload["id"];
        state.profile.name = payload["name"];
        state.profile.img_url = payload["img_url"];
        state.profile.email = payload["email"];
    },
    signedIn(state){
        state.login = true
    },
    signOut(state){
        state.login = false
    }
}