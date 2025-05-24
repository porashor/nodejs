// autor : Parashar 
// title : math declare 
// description : random number printing
// version : 1.0.0
// date : 21.05.2025



// scaffolding 
const mathlib = {};

// random printing function area
mathlib.getRandom = function(min, max) {
    let minimum = min;
    let maximum = max;
    const mini = typeof minimum === "number" ? minimum : 0;
    const maxi = typeof maximum === "number" ? maximum : 10;
    return Math.floor(Math.random() * (maxi - mini + 1) + mini);
}

// export module 
module.exports = mathlib