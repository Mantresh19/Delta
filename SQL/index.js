import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express from "express";
const path = require("path");

app.set("view engine", "ejs");
app.use("views", path.join(__dirname, "/views"));

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

// Create a pool so routes can run queries without reconnecting each time.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "SDE@f66ng",
});

app.get("/", async (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM `user`";
  try {
    const [rows] = await pool.query(q);
    res.json({ message: "App is working", count: rows[0].count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

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
