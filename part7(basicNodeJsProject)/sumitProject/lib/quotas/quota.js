// autor : parashar
// title : main file derectory
// description : its prints random quotas 
// version : 1.0.0
// date : 22.05.2025


// depandancys 
const fs = require("fs");

//scaffolding 
const quota = {};

// get all quota 
// quota.getQuota = function() {
//     const allQuota = fs.readFileSync(`./quota.txt`);
//     const data = allQuota.split("\n");
//     return data;
// }
const data = fs.readFileSync("./quota.txt")


// exporting main module
console.log(data);