const mongoose = require("mongoose")
const Chat = require("./models/chat")

main()
.then(() => console.log("Mongoose connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allchats = [
    {
        from: "Neha",
        to: "Preeti",
        msg: "Behen ajj paper haii???",
        created_at: new Date()
    },
    {
        from: "Mikasa",
        to: "Eren",
        msg: "Freedom",
        created_at: new Date()
    },
    {
        from: "Armin",
        to: "Eren",
        msg: "There's sea outside walls!",
        created_at: new Date()
    },
    {
        from: "Levi",
        to: "Erwin",
        msg: "Are you gonna gamble again huh",
        created_at: new Date()
    },
]

Chat.insertMany(allchats);