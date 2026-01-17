const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on this port ${port}`);
});

// app.get("/", (req, res) => {
//     res.send("you contacted root pathhh")
// })

// app.get("/apple", (req, res) => {
//     res.send("You are inside an apple :)")
// })

// // If you want to send your own response (error)

// app.get("*",(req,res)=>{
//     res.send("Kaha aa gaya bhai yeh toh humare list me hi nahi hai")
// })

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

// app.use((req,res) => {
//     console.log("request received");
//     let code = "<h1>This is a response</h1>"
//     res.send(code);
// });

// This is how they have billions of accounts saved

app.get("/", (req, res) => {
    res.send("you contacted root pathhh")
})
app.get("/:username/:id", (req,res) => {
    let {username, id} = req.params;
    // You can even send html strings
    res.send(`welcome to the page of @${username}.`)
})

app.get("/search", (req,res) => {
    console.log(req.query);
    res.send("no results");
})

// you can even store only one element value
app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q) {
        res.send("Nothing searched")
    }
    res.send(`results for ${q}`);
})