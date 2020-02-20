const db = require("../data/db-config.js");

module.exports = { all, add };

function all() {
  return db("cars");
}

function add(car) {
  return db("cars").insert({ ...car });
}
