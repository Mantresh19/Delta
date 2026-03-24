const mongoose = require("mongoose")
const{Schema} = mongoose

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

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number
})