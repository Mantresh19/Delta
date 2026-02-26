const express = require("express");
const ExpressError = require("./ExpressError");
const app = express()
let port = 5001;

// app.use((req, res, next) => {
//     console.log("Hi! I am a middleware")
//     next()
// })

// app.use((req, res, next) => {
//     console.log("Hi! I am a second middleware")
//     next()
// })

// Utility middleware logger 
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toDateString()
//     console.log(req.method, req.hostname, req.path, req.time)
//     next()
// })

const checkToken = (req, res, next) => {
    let {token} = req.query
    if (token === "accessgranted") {
        next()
    }
    throw new ExpressError(401, "ACCESS DENIED")
}

app.get("/api", checkToken, (req, res) => {
    res.send("data")
})

app.get("/", (req, res) => {
    res.send("I am root")
})

app.get("/second", (req, res) => {
    res.send("I am second")
})


// Error handling by yourself
app.get("/err", (req, res) => {
    abce = abce
})

app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occured" } = err;
    res.status(status).send(message)
})

// app.use((err, req, res, next) => {
//     console.log("-----ERROR2-----")
//     next(err)
// })

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})