const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing")

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(() => {
    console.log("Connect to DB")
})
.catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})

app.get("/testlisting", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 12000,
        location: "Kokan",
        country: "India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing")
})

app.listen(port, (req, res) => {
    console.log(`listening to port: ${port}`);
});
