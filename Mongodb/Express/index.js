const express = require("express");
const app = express();
const port = 8080;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/", (req, res) => {
    res.send("working")
})

app.listen(port, (req, res) => {
    console.log(`${port}`)
})