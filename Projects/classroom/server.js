const express = require("express");
const app = express();
const users = require("./routes/user")
const posts = require("./routes/post")
const session = require("express-session") 

app.use(session({secret: "supersecretcookie"}))

app.get("/test", (req, res) => {
    res.send("Test successful")
})

// const cookieParser = require("cookie-parser")

// app.use(cookieParser("secretcode"))

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "Hello");
//     res.cookie("Namaste", "India");
//     res.send("Sent you some cookies!");
// })

// app.get("/getsignedcookies", (req, res) => {
//     res.cookie("made-in", "India", {signed: true})
//     res.send("Signed cookie sent")
// })

// app.get("/verify", (req, res) => {
//     console.log(req.cookies)
//     res.send("verified")
// })

// app.get("/", (req, res) => {
//     console.dir(req.cookies)
//     res.send("Hi, I am root!");
// })
// app.use("/users", users)
// app.use("/posts", posts)

app.listen(3000, () => {
    console.log("server is listening to 3000")
})