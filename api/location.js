export default axios => ({
    searchAddress: (name) => {
        return axios.get('https://nominatim.openstreetmap.org/search?q=' + name + '&format=json&polygon=1&addressdetails=1')
        .then(res => res.data)
    },
    getNews: () => {
        // return axios.get('https://api.safetogo.live/nearby-location')
        return axios.get('http://localhost:5000/nearby-location')
            .then(res => res.data)
    },
    storeSearchAddress:(params) => {
        return axios.post(
            "https://api.safetogo.live/search-result",params
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
            // "https://api.safetogo.live/vote",params
            "http://localhost:5000/vote",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
});
