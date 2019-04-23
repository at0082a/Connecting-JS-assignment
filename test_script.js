const pg = require("pg");
const settings = require("./settings"); // settings.json

const person = process.argv.slice(2)[0];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name = $1", [person], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    var count = 0;

    result.rows.forEach(person => { 
        count += 1;
        var firstName = person.first_name;
        var lastName = person.last_name;
        var birthdate = person.birthdate;
        birthdate = birthdate.toString().slice(0,15);
        console.log(count + ': ', firstName, lastName + ', ' + 'born', birthdate)
    });
        
    // result.rows[0].number; //output: 1
    client.end();
  });
});