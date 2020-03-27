export default axios => ({
    signIn: (params) => {
        return axios.post(
            "/signin",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    signOut: (params) => {
        return axios.post(
            "/signout",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
});