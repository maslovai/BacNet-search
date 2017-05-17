'use strict';

const lineReader = require('readline')
// const conString = process.env.DATABASE_URL ||
//                   'postgres://USERNAME:PASSWORD@HOST:PORT';
const conString = '';
const pg = require('pg');
const fs = require('fs');
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

var entries = []; //array of all entries
// var barcodes = []; //all barcodes (bacteria)
// var antibiotics = []; //all antibiotics
// var sites = []; //all sites/hospitals


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
  for(var i = 0; i < entries.length; ++i) {
    var e = entries[i];
    client.query(`
      INSERT INTO entries(barcode, antibiotic, site, recommended, resistance)
      VALUES($1, $2, $3, $4, $5)
    ;` [e.barcode, e.antibiotic, e.site, e.recommended, e.resistance]);
  }

  console.log(client.query(`SELECT * FROM entries`));
}

// set off all the above.
fs.readFile('BacNeT.csv', 'utf8', (err, data) => {
  if (err) throw err;
  readCSV(data);
});
