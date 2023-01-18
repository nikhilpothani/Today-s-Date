const express = require("express");
const addDays = require("date-fns/addDays");

let today = new Date();

result = addDays(new Date(today), 100);

const app = express();

app.get("/", (request, response) => {
  response.send(
    `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
