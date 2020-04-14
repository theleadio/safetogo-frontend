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
        .catch(err => console.error(err))
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
        .catch(err => console.error(err))
    },
    getSummary:(params) => {
        return axios.get(
            "/map/summary"
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    searchKeywordsV2: (name) => {
        return axios.get(
            "/map/v2/suggest?place_name="+name
            )
            .then(res=> res.data)
    },
    searchAddressV2: (name) => {
        return axios.get(
            "/map/v2/search?place_name="+name
            )
        .then(res => res.data)
    },
    getSummaryV2:(country) => {
        return axios.get(
            "/map/v2/summary?country="+country
            )
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    getUserLocationCity(){
        return axios.get(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        ).then(res=>res.data)
        .catch(err=>console.error(err));
    },
    getCases: (country) => {
        return axios.get(
            "map/v2/cases?country="+country
        ).then(res => res.data)
        .catch(err => console.log(err))
    },
    voteV2:(params) => {
        return axios.post(
            "/map/v2/vote",params
            )
        .then(res => res.data)
        .catch(err => console.error(err))
    },
    getBorneo:() => {
        return axios.get(
            "/map/v2/borneo"
        ).then(res => res.data)
        .catch(err => console.error(err));
    }
});
