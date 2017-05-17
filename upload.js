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
var barcodes = []; //all barcodes (bacteria)
var antibiotics = []; //all antibiotics
var sites = []; //all sites/hospitals

var siteTable = []; // hospital recommendations by barcode/antibiotic pair

// resistances by barcode/antibiotic pair
var resistanceTable = [];

//check if the resistance table already has a barcode/antibiotic pair.
// returns boolean
resistanceTable.hasPair = function(barcode, antibiotic) {
  for (var i = 0; i < resistanceTable.length; i++) {
    var pair = resistanceTable[i];
    if(pair.barcode == barcode && pair.antibiotic == antibiotic) return true;
  }
  return false;
}
//gets the percent resistance of a barcode/antibiotic pair from the table
resistanceTable.getResistance = function(barcode, antibiotic) {
  for (var i = 0; i < resistanceTable.length; i++) {
    var pair = resistanceTable[i];
    if(pair.barcode == barcode && pair.antibiotic == antibiotic)
      return pair.resistance;
  }
  return undefined;
}

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

// create the more specialized tables from the RawEntry array
function createTables() {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if(entry.antibiotic == undefined) continue; //atom always adds a blank line at the end of the file that is interpreted as all undefined values. We skip that and any other empty lines.

    if(barcodes.indexOf(entry.barcode) < 0) barcodes.push(entry.barcode);
    if(antibiotics.indexOf(entry.antibiotic) < 0) antibiotics.push(entry.antibiotic);
    if(sites.indexOf(entry.site) < 0) sites.push(entry.site);
    //console.log(antibiotics);
    //console.log(sites);

    //create the entry for whether *this* barcode/antibio pair is recommended by *this* site. We skip entries where site is "any".
    if(entry.site !== 'Any')
    {
      siteTable.push({
        barcode: entry.barcode,
        antibiotic: entry.antibiotic,
        site: entry.site,
        recommended: (entry.recommended === 'YES')? true : false});
    }

    //check if this pair is already in the resistance table. If yes, check if there's a mismatch and log it if there is (apparently this isn't actually how it works?).
    if(resistanceTable.hasPair(entry.barcode, entry.antibiotic)) {
      var res = resistanceTable.getResistance(entry.barcode, entry.antibiotic);
      if(res != entry.resistance) console.log('Resistance mismatch on ' + entry.barcode + '/' + entry.antibiotic +  '. ' + res + ' vs. ' + entry.resistance);
    } else {
      resistanceTable.push({barcode: entry.barcode, antibiotic: entry.antibiotic, resistance: entry.resistance});
    }
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
  createTables();
});
  // $.ajax({
  //   type: 'GET',
  //   url: 'BacNeT.csv',
  //   dataType: 'text',
  //   success: function(data){readCSV(data);}
  // }).then(function() {
  //   createTables();
  // }).then(function() {
  //   display();
  // })
