
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, name_ingredient: 'taco shells', amt_ingredient: 4.5},
        {recipe_id: 1, name_ingredient: 'parmesan cheese', amt_ingredient: 3.5},
      ]);
    });
};
