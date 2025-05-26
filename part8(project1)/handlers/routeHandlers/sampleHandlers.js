// title : sample handler
// description : there is all code about handling routers
// autor: parashar
// date : 2020-10-26


// scaffolding 
const sampleHandler = {}

sampleHandler.sampleHandle = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, {
        message: "this is sample url"
    })
}

// exports 
module.exports = sampleHandler