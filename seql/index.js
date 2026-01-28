const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'SDE@f66ng'
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
    ["123a", "Mantresh", "mantresh1999@gmail.com", "SDE@f66ng"]
    ["123b", "Mantreshh", "mmantresh1999@gmail.com", "SSSDE@f66ng"]
]

try{
    connection.query(q, [users], (err, result) => {
        if(err) throw err;
        console.log(result)
    })
} catch (err) {
    console.log(err)
}

connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}