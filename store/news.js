export const state = () => ({
    list:[
        {
            title: "Testing Title",
            source: "https://thelead.io",
            content: "Welcome to SafetoGo",
            createdAt: "2020-03-17 08:18:00",
            createdBy: "Edmund",
            img_url: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            upVote: 5,
            downVote: 1
        },
    ],
    show: false
});

export const getter = {
    getNews(state){
        return state.news
    },
    show(state){
        return state.show
    }
}

export const mutations = {
    setNews (state, payload){
        state.news = payload
    },
    showNews(state){
        state.show = true
    },
    hideNews(state){
        state.show = false
    }
}