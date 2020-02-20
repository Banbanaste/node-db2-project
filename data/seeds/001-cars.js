exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: "sdjkb213ca", make: "Ford", model: "Mustang", mileage: 24239 },
        {
          vin: "4308975vfe",
          make: "Lincoln",
          model: "Navigator",
          mileage: 1230
        },
        { vin: "vjs8932jkd", make: "Lincoln", model: "MKS", mileage: 64153 }
      ]);
    });
};
