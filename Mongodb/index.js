const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection successful!!");
})
.catch((err) => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema - overall structure of the db

const userSchema = mongoose.Schema({
    name: String,
    emai: String,
    age: Number
})

// Models is a mongoose class which we use to construct documents

const User = mongoose.model("User", userSchema);

User.deleteMany({name: "Charam"}, {name: "Pakya"})
.then((res) => console.log(res))
.catch((err) => console.log(err))

// User.findOneAndUpdate({name: "Ramesh"}, {name: "Pinku"}, {new: true})
// .then((res)=>console.log(res))
// .catch((err)=> console.log(err))

// User.findById("697ea28d2cbd005ee128221d")
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// Inserting multiple data
// User.insertMany([
//     {name: "Ramesh", emai: "ramesh@bxr.ac.uk", age: 5},
//     {name: "Pakya", emai: "pakya@bxr.ac.uk", age: 3},
//     {name: "Charam", emai: "charan@bxr.ac.uk", age: 2},
// ]).then((res) => {
//     console.log(res)
// }).catch((err) => console.log(err))

// Inserting single data
// const user2 = new User({
//     name: "eve",
//     email: "eve@gmail.co.uk",
//     age: 11
// })

// user2.save().then((res) => {
//     console.log(res)
// })
// .catch((err) => console.log(err))