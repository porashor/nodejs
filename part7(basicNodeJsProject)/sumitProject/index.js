//autor : Parashar
// title : basic node app 
// description : its prints random quotas 
// version : 1.0.0
// date : 21.05.2025

// depandancy
const mathlib = require("./lib/mathlib")
const quotalib = require("./lib/quotas/new")

// module scaffolding
const app = {}

// configeration 
app.config = {
    timeBetweenQuotes : 2000,
};


// main function which print random quota 
app.printRandomQuota = function(){
    // get all quota 
    const allQuota = quotalib.getQuota();
    // get lenghts of all quota 
    const numberOfQuota = allQuota.length;
    // get randomNumber 
    const randomIndex = mathlib.getRandom(1, numberOfQuota);
    // get random quota 
    const randomQuota = allQuota[randomIndex];
    // print random quota 
    console.log(randomQuota);
}

// const arr = quotalib.getQuota();
// const arrlen = arr.length;
// const randomIndex = mathlib.getRandom(1, arrlen);
// const randomQuota = arr[randomIndex];
// console.log(randomQuota);

// invoke it frequently 
setInterval(app.printRandomQuota, app.config.timeBetweenQuotes);