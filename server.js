'use strict';

const express = require('express');
const app = express();

const page = require('page');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const pg = require('pg');
const fs = require('fs');
const conString = 'postgres://irynamaslova@localhost:5432/antibiotics';

const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static(__dirname + '/'));
app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.get('data-test', function(request, response) {
//
//   client.query(`SELECT * FROM all_data
//       WHERE hospital===option.value and bacteria === textarea.value
//     `)
//   .then(function(result) {
//     response.send();
//   })
//   .catch(function(err) {
//     console.error(err)
//   })
// });







function loadData() {
  client.query('SELECT COUNT(*) FROM all_data')
  .then(function(result) {
    if(!parseInt(result.rows[0].count)) {
      fs.readFile('data-test/data.json', function(err, fd) {
        console.log(err);
        JSON.parse(fd.toString()).forEach(function(ele) {
          client.query(`
            INSERT INTO
            all_data(hospital, bacteria, antibiotic, recommended, resistance)
            VALUES ($1, $2, $3, $4, $5);`,
            [ele.hospital, ele.bacteria, ele.antibiotic, ele.recommended, ele.resistance]
          )
        })
      })
    }
  })
};

function loadDB(){
  console.log('creating table');
  client.query(`
    CREATE TABLE IF NOT EXISTS
    all_data(
      item_id SERIAL PRIMARY KEY,
      hospital VARCHAR(255) NOT NULL,
      bacteria VARCHAR(5) NOT NULL,
      antibiotic VARCHAR(20) NOT NULL,
      recommended VARCHAR(4) NOT NULL,
      resistance VARCHAR(6) NOT NULL);`
  )
  .then(function(data) {
     loadData(data);
  })
  .catch(function(err) {
    console.error(err)
  });
}
loadDB();
