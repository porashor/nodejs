// title : handle request and response 
// description : i always try to write clean code for handling req and res
// autor: parashar
// date : 2020-10-23

// depandancy 
const url = require('url')
const { StringDecoder } = require('string_decoder');
const routes = require('../route')
const {notfoundHandler} = require('../handlers/routeHandlers/notfoundeHandler')

// module scaffolding 
const handle = {}

// handle req and res 
handle.reqRes = (req, res) => {
    // routing handle 
    const baseurl = url.parse(req.url, true)
    // path area 
    const path = baseurl.pathname
    // path modifyed 
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')
    // request accept
    const method = req.method.toLowerCase()
    //qurary 
    const query = baseurl.query
    // request header 
    const headers = req.headers

    // combine all requested properties 
    const requestProperties = {
        baseurl,
        path,
        trimmedPath,
        method,
        query,
        headers
    }


    // choosen handler 
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notfoundHandler

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) == 'number' ? statusCode : 500
        payload = typeof(payload) == 'object' ? payload : {}
        const payloadString = JSON.stringify(payload)
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(statusCode)
        res.end(payloadString)  
    })

    // decoder new style and that is  actual rules 
    const decoder = new StringDecoder('utf-8')
    let realData = "";

    req.on("data", (buffer)=>{
        realData += decoder.write(buffer);
    });

    req.on("end", ()=>{
        realData += decoder.end();
        console.log(realData)
        res.write(realData)
        res.end()
    })
}

// export 
module.exports = handle