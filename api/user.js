export default axios => ({
    signIn: (params) => {
        return axios.post(
            "/user/signin",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    signOut: (params) => {
        return axios.post(
            "/user/signout",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    signInV2: (params) => {
        return axios.post(
            "/user/v2/signin",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    }
});