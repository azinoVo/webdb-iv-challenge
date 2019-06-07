
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl
            .increments();
        tbl
            .string('name_ingredient', 125)
            .notNullable();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT') // explain how cascading works
            .onUpdate('CASCADE');
        tbl
            .float('amt_ingredient');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
