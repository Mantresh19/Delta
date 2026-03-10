const mongoose = require("mongoose")
const{Schema} = mongoose

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model("User", userSchema)

const addUsers = async() => {
    let user1 = new User({
        username: "Bob",
        addresses: [{
            location: "221B Baker Street",
            city: "London"
        }]
    })

    user1.addresses.push({location: "P32 WallStreet", city: "London"})
    let result = await user1.save()
    console.log(result)
}
// Connect first, then add users. Ensure we wait for connection before saving.
main()
    .then(async () => {
        console.log("connection successful");
        try {
            await addUsers();
        } catch (err) {
            console.error("Error in addUsers:", err);
        } finally {
            await mongoose.connection.close();
            console.log("connection closed");
        }
    })
    .catch((err) => console.log(err));