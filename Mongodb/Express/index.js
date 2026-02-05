const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path")
const Chat = require("./models/chat")
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))

main()
.then(() => console.log("Mongoose connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/chats", async (req, res) => {
    let {from, to, msg} = req.body
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    await newChat.save()
    res.redirect("/chats")
})

app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    console.log(chats)
    res.render("index.ejs", {chats})
})

app.get("/", (req, res) => {
    res.send("working")
})

app.listen(port, (req, res) => {
    console.log(`Listening to port: ${port}`)
})