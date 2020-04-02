const defaultState = () => {
    return {
        profile: {
            id: "",
            name: "",
            img_url: "",
            email: "",
            safetogo_id: "",
            votes: []
        },
        loginStatus: false
    }
}

export const state = () => defaultState();

export const getters = {
    getUser(state){
        return state.user
    }
}

export const mutations = {
    signOut(state){
        Object.assign(state, defaultState());
    },
    loginUser(state, payload){
        state.profile.id = payload["id"];
        state.profile.name = payload["name"];
        state.profile.img_url = payload["img_url"];
        state.profile.email = payload["email"];
        state.loginStatus = true;
    },
    updateUserProfile(state, resp){
        state.profile.safetogo_id = resp["user_id"]
        state.profile.votes = resp["votes"]
    }
}