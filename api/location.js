export default axios => ({
    searchAddress: (name) => {
        return axios.get(
            "/map/search?place_name="+name
            )
        .then(res => res.data)
    },
    getNews: () => {
        return axios.get('/map/nearby-location')
            .then(res => res.data)
    },
    storeSearchAddress:(params) => {
        return axios.post(
            "/map/search-result",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    searchKeywords: (name) => {
        return axios.get(
            "/map/suggest?place_name="+name
            )
            .then(res=> res.data)
    },
    vote:(params) => {
        return axios.post(
            "/map/vote",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    getSummary:(params) => {
        return axios.get(
            "/map/summary"
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
});
