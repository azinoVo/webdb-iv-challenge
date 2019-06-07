
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name_recipe: 'double-cheese taco', instructions: 'INSERT INSTRUCTIONS HERE!'},
      ]);
    });
};
