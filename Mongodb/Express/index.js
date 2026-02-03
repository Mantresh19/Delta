const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path")
const Chat = require("./models/chat")
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then(() => console.log("Mongoose connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "Gotya",
    to: "Pakya",
    msg: "Bhai ajj konsa paper haii???",
    created_at: new Date()
})

chat1.save()
.then((res) => console.log(res))

app.get("/", (req, res) => {
    res.send("working")
})

app.listen(port, (req, res) => {
    console.log(`Listening to port: ${port}`)
})

2
3