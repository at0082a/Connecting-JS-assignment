
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('famous_people').del()
    .then(function () {
      return knex('famous_people').insert([
        {id: 1, first_name: 'Doug', last_name: 'Gilmour', birthdate: '1963-06-25'},
        {id: 2, first_name: 'Mats', last_name: 'Sundin', birthdate: '1971-02-13'}
      ]);
    });
};
