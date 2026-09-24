const express = require("express");
const app = express();
const users = require("./routes/user")
const posts = require("./routes/post")
const session = require("express-session") 
const flash = require("connect-flash")

const sessionOptions = {
    secret: "supersecretcookie", 
    resave: false, 
    saveUninitialized: true
}

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
    let {name = "Random"} = req.query
    req.session.name = name;
    req.flash("success", "user registered successfully")
    res.redirect("/hello")
})

app.get("/hello", (req, res) => {
    res.send(`Hello ${req.session.name}`)
})

// app.get("/reqcount", (req, res) => {
//     if(req.session.count) {
//         req.session.count++
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`)
// })

// app.get("/test", (req, res) => {
//     res.send("Test successful")
// })

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