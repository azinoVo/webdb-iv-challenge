
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl
            .increments();
        tbl
            .string('name_recipe', 125)
            .notNullable()
            .unique();
        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dish')
            .onDelete('RESTRICT') // explain how cascading works
            .onUpdate('CASCADE');
        tbl
            .text('instructions')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');

};
