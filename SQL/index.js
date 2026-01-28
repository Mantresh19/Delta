import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express from "express";

const app = express();
const port = 8080;

// Insert random data
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
};

// const q = "INSERT INTO `user` (id, username, email, password) VALUES ?";

// const data = [];
// for (let i = 1; i <= 100; i++) {
//   const user = getRandomUser();
//   data.push([user.id, user.username, user.email, user.password]);
// }

async function main() {
  // Create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "SDE@f66ng",
  });

app.get("/", async(req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
      const [result] = await connection.query(q, [data]);
      console.log("Inserted:", result.affectedRows);
    } catch (err) {
      console.log(err);
    } finally {
      await connection.end();
      res.send("App is working")
    }
  }
)};

main().catch((err) => console.error(err));

app.listen(port, () => {
  console.log("Listening to port 8080");
});

// Faker
// let getRandomUser= () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   }
// }