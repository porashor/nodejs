// title : sample handler
// description : there is all code about handling routers
// autor: parashar
// date : 2020-10-26


// scaffolding 
const notfoundHandler = {}

notfoundHandler.sampleHandle = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(404, {
        message: "this is not found url"
    })
}

// exports 
module.exports = notfoundHandler