const express = require("express")
const app = express()

let port = 3000

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

app.get("/home", (req, res) => {
    console.log("New incomming request")
    let code = "<h1>Fruits</h1>"
    res.send(code)
})