export default axios => ({
    searchAddress: (name) => {
        return axios.get('https://nominatim.openstreetmap.org/search?q=' + name + '&format=json&polygon=1&addressdetails=1')
        .then(res => res.data)
    },
    getNews: () => {
        return axios.get('https://api.safetogo.live/nearby-location')
            .then(res => res.data)
    },
    storeSearchAddress:(params) => {
        return axios.post(
            "https://api.safetogo.live/search-result",params
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    }
});
