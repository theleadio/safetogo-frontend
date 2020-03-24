export default axios => ({
    signIn: (params) => {
        return axios.post(
            "https://api.safetogo.live/signin",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    signOut: (params) => {
        return axios.post(
            "https://api.safetogo.live/signout",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
});