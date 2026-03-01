const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path")
const Chat = require("./models/chat")
const methodOverride = require("method-override")
const ExpressError = require("./ExpressError")
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

main()
.then(() => console.log("Mongoose connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/chats", async (req, res, next) => {
    try {
        let {from, to, msg} = req.body
        let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    await newChat.save()
    res.redirect("/chats")
    } catch (err) {
        next(err);
    }
    
})

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err))
    }
}

// New - Show Route Error handling
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if(!chat) {
        next( new ExpressError(404, "Chat not found"))
    res.render("edit.ejs", { chat });
    }
}));

app.get("/chats", asyncWrap(async (req, res) => {
        let chats = await Chat.find()
        // console.log(chats)
        res.render("index.ejs", {chats})
    }))

app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
        let {id} = req.params;
        let chat = await Chat.findById(id)
        res.render("edit.ejs", {chat})
}))

app.put("/chats/:id", asyncWrap(async (req, res) => {
        let {id} = req.params;
        let{msg: newMsg} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true})
        // console.log(updatedChat);
        res.redirect("/chats")
}))

// Destroy Route
app.delete("/chats/:id", asyncWrap(async (req, res) => {
        let {id} = req.params;
        let deletedChats = await Chat.findByIdAndDelete(id);
        console.log(deletedChats);
        res.redirect("/chats");
}));

app.get("/", (req, res) => {
    res.send("working")
})

const HandleValidationError = (err) => {
    console.log("This was a fuckup!")
    console.dir(err)
    return err
}

app.use((err, req, res, next) => {
    if(err.name === "ValidationError") {
        err = HandleValidationError(err)
    }
    next(err)
})

// Error handling middleware
app.use((err, req, res, next) => {
    let {status = 500, message="SOME RANDOM SHIT OCCURED"} = err
    res.status(status).send(message)
})

app.listen(port, (req, res) => {
    console.log(`Listening to port: ${port}`)
})

// Ask runvalidators
// Ask why id we use to update delete what id does do we access through id
8