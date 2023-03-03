"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("hitesh");
signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com"); //because after the type we said "= false" which means its going to be false by default
//function getValue(myVal: number) {
//  if (myVal > 5) {
//    return true;
//  }
//  return "200 OK";
//}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    //oookkkk so .map is used a lot like a loop in js. gotta know the difference between this and a for
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    // void means its not going to return anything (returns nothing)
    console.log(errmsg);
}
function handleError(errmsg) {
    // never means it never returns a value
    // example of a function where we intentionally crash, throw an error on purpose, so it will never return a value
    // Its recomended in the guidelines of the TS to use "never" to handle errors
    // The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
    throw new Error(errmsg);
}
