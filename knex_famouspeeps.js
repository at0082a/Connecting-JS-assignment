const settings = require("./settings");

var knex = require('knex')({
    client: 'pg',
    version: '9.5.10',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });

var query = knex.select("*").from("famous_people");

// console.log(query.toSQL().sql);

let count = 0;

query.then(function(results) {
    results.forEach(person => {
    count += 1;
    var firstName = person.first_name;
    var lastName = person.last_name;
    var birthdate = person.birthdate;
    birthdate = birthdate.toString().slice(0,15);
    console.log(count + ': ', firstName, lastName + ', ' + 'born', birthdate);
   })
});

