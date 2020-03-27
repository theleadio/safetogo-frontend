export default axios => ({
    createPost: (params) => {
        return axios.post(
            "/map/new-post",params
            // "http://localhost:5000/new-post",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    }
});