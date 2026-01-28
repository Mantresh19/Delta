const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

const port = 8080;

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

let q = "INSERT INTO `user` (id, username, email, password) VALUES ?";

let data = [];
for(let i=1; i<=100; i++) {
    data.push(getRandomUser())
}

// connection.end();

try{
    connection.query(q, [data], (err, result) => {
        if(err) throw err;
        console.log(result)
    })
} catch (err) {
    console.log(err)
}

app.listen("/", (req, res) => {
    res.send
})
