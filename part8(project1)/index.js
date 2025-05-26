// autor : parashar
// title: App 
// description: 
// date : 2020-10-23

// depandancy 
const http = require('http')
const handle = require('./helper/handleReqRes')

// scafolding 
const app = {}

// config 
app.config = {
    port: 3000,
    host: '127.0.0.1'
}

// server 
app.createServer = () => {
    const server = http.createServer(handle.reqRes)
    server.listen(app.config.port, app.config.host, () => {
        console.log(`server started at http://${app.config.host}:${app.config.port}`)
    })
    return server
}


// server call 
app.createServer()