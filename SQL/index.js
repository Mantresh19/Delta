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

try {
  const [rows] = await connection.query("SHOW TABLES");
  console.log(rows);
  } catch (err) {
    console.log(err)
} finally {
  await connection.end();
}

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