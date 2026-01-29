const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

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
    let q = `SELECT * FROM WHERE id= '${id}'`
    try{
    connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("showusers.ejs", {users})
    })
} catch (err) {
    console.log(err)
    res.send("Some error in DB")
}
    res.render("edit.ejs")
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

// Change1
// Change2
// Change3
// Change4
// Change5
// Change6