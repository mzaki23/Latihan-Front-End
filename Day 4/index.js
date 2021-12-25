require = require("esm")(module);
module.exports = require("./string_function");
console.log("----Perbedaan antara Import dan Require");
import  { capitalizeString } from "./string_function"

const cap = capitalizeString("hello!");

console.log(cap);