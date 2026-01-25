const express = require("express")
const app = express()

let port = 3000

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

// app.get("/:home", (req, res) => {
//     console.log("New incomming request")
//     let code = "<h1>Fruits</h1>"
//     res.send(code)
// })

app.get("/:username", (req, res) => {
    let {username} = req.params;
    res.send(`this is the page of @${username}`)
})

app.get("/:username/:id", (req, res) => {
    let {id} = req.params;
    res.send(`id is ${id}`)
})

