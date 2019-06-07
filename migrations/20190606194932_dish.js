
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dish', function(tbl) {
        tbl.increments();
        tbl.string('name_dish', 125).notNullable().unique();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dish');

};
