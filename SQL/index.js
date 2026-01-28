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

// Insert random data
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
};

console.log(getRandomUser());

let q = "INSERT INTO `user` (id, username, email, password) VALUES ?";

let data = [];
for (let i=1; i<=100; i++) {
   const user = getRandomUser();
   data.push([user.id, user.username, user.email, user.password]);
}

// Test 
try {
  const [result] = await connection.query(q, [data]);
  console.log("Inserted:", result.affectedRows);
  } catch (err) {
    console.log(err);
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

//  connection.end();

// let getRandomUser= () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   }
// }
