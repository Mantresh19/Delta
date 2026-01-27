import {faker} from '@faker-js/faker'
// Get the client
import mysql from 'mysql2/promise'

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'SDE@f66ng'
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let user = [
  ["900a", "jkjak", "manatresh899@gmail.com", "SDE0a00f66ng"],
  ["900r", "jkjkr", "mantresh899@gmail.comm", "SDE000f66ngg"]
];

// Test 
try {
  const [result] = await connection.query(q, user);
  console.log("Inserted:", result);
  } catch (err) {
    console.log(err)
} finally {
  await connection.end();
}

// Working method
// try {
//   const [rows] = await connection.query("SHOW TABLES");
//   console.log(rows);
//   } catch (err) {
//     console.log(err)
// } finally {
//   await connection.end();
// }

connection.end();

let getRandomUser= () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

console.log(getRandomUser());