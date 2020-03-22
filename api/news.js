export default axios => ({
    createPost: (params) => {
        return axios.post(
            "https://api.safetogo.live/new-post",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    }
});