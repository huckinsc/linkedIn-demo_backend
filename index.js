const express = require("express");
const server = express();

const cors = require("cors");

server.use(express.json());
const PORT = process.env.PORT || 8080;

server.use(cors());

const students = require("./db");

server.get("/students", (req, res) => {
  res.send(students);
});

server.post("/students", (req, res) => {
  //console.log(req.body);
  students.push(req.body);
  res.sendStatus(200);
});

server.delete("/students", (req, res) => {
  //console.log(req.body);
  //console.log(req.body.position);
  students.splice(req.body.position, 1);
  res.sendStatus(200);
});

server.put("/students", (req, res) => {
  //console.log(req.body);
  let found = false;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === req.body.id) {
      students[i] = req.body;
    }
  }
  res.send(students);
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
