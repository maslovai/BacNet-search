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
//const conString = 'postgres://kev:32167@localhost:5432/antibiotics';

//const conString = 'postgres://maks@localhost:5432/antibiotics';
const conString = 'postgres://irynamaslova@localhost:5432/antibiotics';

const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);


var entries = []; //array of all entries

//entry constructor. This is a direct copy from the .csv file
var RawEntry = function(data) {
  this.barcode = data[0];
  this.antibiotic = data[1];
  this.site = data[2];
  this.recommended = data[3];
  this.resistance = data[4];
}
//take the data imported from the .csv file and convert it to RawEntry objects (above)
function readCSV(data) {
  var dataLines = data.split('\n');

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
      recommended BOOLEAN,
      resistance INTEGER
    );`
  );
  client.query(`SELECT COUNT(*) FROM entries`).then(function(result) {
    if(!parseInt(result.rows[0].count)) {
      for(var i = 0; i < entries.length; ++i) {
        var e = entries[i];
        client.query(`
          INSERT INTO entries(barcode, antibiotic, site, recommended, resistance)
          VALUES($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING
          ;`, [e.barcode, e.antibiotic, e.site, e.recommended, e.resistance]);
      }
    }
});

  client.query(`SELECT * FROM entries`, null, function(err, res) {
    console.log(res.rows);
  });
}

// set off all the above.
fs.readFile('BacNeT.csv', 'utf8', (err, data) => {
  if (err) throw err;
  readCSV(data);
  writeSQL();
});


app.get('/entries/:site/:barcode', (request, response) => {
  //console.log(request.params);
  client.query(`SELECT * FROM entries
    WHERE site=$1 AND barcode=$2;`,
    [request.params.site,request.params.barcode]
  ).then(function(result) {
    //console.log(result);
    response.send(result.rows)
  })
  .catch(function(err) {
    console.error(err)
  })
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' })
});





// This was a test table.  We can delete it later.

// function loadData() {
//   client.query('SELECT COUNT(*) FROM all_data')
//   .then(function(result) {
//     if(!parseInt(result.rows[0].count)) {
//       fs.readFile('data-test/data.json', function(err, fd) {
//         console.log(err);
//         JSON.parse(fd.toString()).forEach(function(ele) {
//           client.query(`
//             INSERT INTO
//             all_data(hospital, bacteria, antibiotic, recommended, resistance)
//             VALUES ($1, $2, $3, $4, $5);`,
//             [ele.hospital, ele.bacteria, ele.antibiotic, ele.recommended, ele.resistance]
//           )
//         })
//       })
//     }
//   })
// };


//function loadDB(){
//   console.log('creating table');
//   client.query(`
//     CREATE TABLE IF NOT EXISTS
//     all_data(
//       item_id SERIAL PRIMARY KEY,
//       hospital VARCHAR(255) NOT NULL,
//       bacteria VARCHAR(5) NOT NULL,
//       antibiotic VARCHAR(20) NOT NULL,
//       recommended VARCHAR(4) NOT NULL,
//       resistance VARCHAR(6) NOT NULL);`
//   )
//   .then(function(data) {
//      loadData(data);
//   })
//   .catch(function(err) {
//     console.error(err)
//   });
// }
// loadDB();
