// autor : parashar 
// title : get quota 
// description : get quota 
// version : 1.0.0
// date : 23.05.2025

// requiring fs module 
const fs = require("fs");


// scafolding 
const quota = {};

// get data function 
quota.getQuota = function() {
    const data = fs.readFileSync(`${__dirname}/quota.txt`).toString("utf16le");
    const dataArr = data.split("\n");
    return dataArr
}




// export module 
module.exports = quota