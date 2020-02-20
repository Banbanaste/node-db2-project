exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("vin", 128)
      .unique()
      .notNullable();

    tbl.text("make", 128).notNullable();

    tbl.text("model", 128).notNullable();

    tbl.decimal("mileage").notNullable();

    tbl.boolean("transmission");

    tbl.text("title");
  });
};

exports.down = function(knex) {};
