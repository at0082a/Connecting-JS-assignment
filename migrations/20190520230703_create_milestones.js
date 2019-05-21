
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.string('description');
      table.date('date_achieved');
      table.increments('user_id').primary();
      table.integer('famous_person_id').inTable('famous_people').references('id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
