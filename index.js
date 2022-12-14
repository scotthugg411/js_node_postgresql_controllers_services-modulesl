// TODO ES6 - Controllers and Services Modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 5432;
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

const newLocal = "/users";
app.get(newLocal, db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
