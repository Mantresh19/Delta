const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const methodOverride = require("method-override")

app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", patch.join(__dirname, "/views"));

const port = 8080;

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`
    try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        let count = result[0]["count(*)"]
        res.render("home.ejs", {count})
    })
} catch (err) {
    console.log(err)
    res.send("Some error in DB")
}
});

app.get("/:user", (req, res) => {
    let q = `SELECT * FROM user`
    try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send(result)
    })
} catch (err) {
    console.log(err)
    res.send("Some error in DB")
}
});

app.get("/:user/data", (req, res) => {
    let q = `SELECT * FROM user`
    try{
    connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("showusers.ejs", {users})
    })
} catch (err) {
    console.log(err)
    res.send("Some error in DB")
}
})

app.get("/user/data/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`
    try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0]
        console.log(result)
        res.render("edit.ejs", { user })
    })
} catch (err) {
    console.log(err)
    res.send("Some error in DB")
}
})

app.patch("/user/data/:id", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`
    try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0]
        res.send(user)
    })
} catch (err) {
    console.log(err)
    res.send("Some error in DB")
}
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'SDE@f66ng'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

// connection.end();