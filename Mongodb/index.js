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