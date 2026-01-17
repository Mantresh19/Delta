// This is a special file names as "index.js" it is not a random name it should always be "index.js"

const apple = require("./apple")
const banana = require("./banana")
const mango = require("./mango")

let fruits = [apple, banana, mango]

module.exports = fruits
