/**
 * Page created by:
 * Kevin Robinson
 * Louis Haywood
 * Maks Mikossyanchik
 *Iryna Maslova
 * 2017
 **/

'use strict';

const express = require('express');
const app = express();

const page = require('page');
const lineReader = require('readline')
const bodyParser = require('body-parser');
const pg = require('pg');
const fs = require('fs');


const PORT = process.env.PORT || 3000;
//const requestProxy = require('express-request-proxy');
const conString = process.env.DATABASE_URL||'postgres://irynamaslova@localhost:5432/antibiotics';
const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT);

var entries = []; //array of all entries

//entry constructor. This is a direct copy from the .csv file
var RawEntry = function(data) {
  this.barcode = data[0];
  this.antibiotic = data[1];
  this.site = data[2];
  this.species = data[3];
  this.gender = data[4];
  this.age = data[5];
  this.inout = data[6];
  this.recommended = data[7];
  this.resistance = data[8];
}
//take the data imported from the .csv file and convert it to RawEntry objects (above)
function readCSV(data) {
  var dataLines = data.split('\r\n');

  for(var i = 1; i < dataLines.length; ++i) {
    if(dataLines[i] === '') continue;
    entries.push(new RawEntry(dataLines[i].split(',')));
  }
}

//write the data to the database
function writeSQL() {
  //create the database
  client.query(
  `CREATE TABLE IF NOT EXISTS
    entries (
      barcode VARCHAR(32) NOT NULL,
      antibiotic VARCHAR(32) NOT NULL,
      site VARCHAR(64) NOT NULL,
      species VARCHAR(32) NOT NULL,
      gender VARCHAR(64) NOT NULL,
      age VARCHAR(64) NOT NULL,
      inout VARCHAR(64) NOT NULL,
      recommended boolean,
      resistance integer
    );`
  );
  client.query(`SELECT COUNT(*) FROM entries`).then(function(result) {
    if(!parseInt(result.rows[0].count)) {
      console.log(entries.length);
      for(var i = 0; i < (entries.length); ++i) {
        var e = entries[i];
        try {
        client.query(`
          INSERT INTO entries(barcode, antibiotic, site, species, gender, age, inout, recommended, resistance)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) ON CONFLICT DO NOTHING;`,
          [e.barcode, e.antibiotic, e.site, e.species, e.gender, e.age, e.inout, e.recommended, e.resistance]);

        } catch (e) {
          console.log(e.barcode);
        }
      }
    }
});
// console.log(entries[90001]);
  // client.query(`SELECT * FROM entries`, null, function(err, res) {
  //   console.log(res.rows);
  // });
}


// set off all the above.
fs.readFile('assets/Spreadsheets/xls-docs/BacNeT-data.csv', 'utf8', (err, data) => {
  if (err) throw err;
  readCSV(data);
  writeSQL();
});

app.get('/entries/:site/:species/:barcode/:gender/:age/:inout', (request, response) => {
  console.log('requesting:')
  console.log(request.params);
  client.query(`SELECT * FROM entries
    WHERE site=$1 AND species = $2 AND barcode=$3 AND gender=$4 AND age=$5 AND inout = $6;`,
    [request.params.site, request.params.species, request.params.barcode, request.params.gender, 
      request.params.age, request.params.inout]
  ).then(function(result) {
    console.log('result:');
    console.log(result);
    response.send(result.rows)
  })
  .catch(function(err) {
    console.error(err)
  })
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' })
});
