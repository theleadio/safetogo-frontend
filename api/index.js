// const app = require('express')()
// module.exports = { path: '/api', handler: app }
// app.get('/hello', (req, res) => {
//     console.log('hello nuxt in text')
//     res.send('world')
// })

import locationApiFactory from "./location";
import newsApiFactory from "./news";
import userApiFactory from "./user";

const apiFactory = axios => ({
    location: locationApiFactory(axios),
    news: newsApiFactory(axios),
    user: userApiFactory(axios)
});

export default apiFactory;
