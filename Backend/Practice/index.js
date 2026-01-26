const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("Listening to porttttt")
})

// app.use((req,res) => {
//     console.log("req rec")
// })

app.get("/", (req, res) => {
    res.send(`This is ${port}`)
})

app.get("/:home", (req, res) => {
    res.render("home.ejs")
})