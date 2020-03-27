export default axios => ({
    searchAddress: (name) => {
        return axios.get('https://nominatim.openstreetmap.org/search?q=' + name + '&format=json&polygon=1&addressdetails=1')
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
        return axios.get('https://nominatim.openstreetmap.org/search?q=' + name + '&format=json')
            .then(res=> res.data)
    },
    vote:(params) => {
        return axios.post(
            "/map/vote",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
});
