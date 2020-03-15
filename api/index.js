// const app = require('express')()
// module.exports = { path: '/api', handler: app }
// app.get('/hello', (req, res) => {
//     console.log('hello nuxt in text')
//     res.send('world')
// })

import locationApiFactory from "./location";

const apiFactory = axios => ({
    location: locationApiFactory(axios)
});

export default apiFactory;
