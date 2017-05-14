'use strict'

var entries = []; //array of all entries
var barcodes = [];
var antibiotics = [];
var sites = [];
// hospital recommendations by barcode/antibiotic pair
var siteTable = [];

// resistances by barcode/antibiotic pair
var resistanceTable = [];
resistanceTable.hasPair = function(barcode, antibiotic) {
  for (var i = 0; i < resistanceTable.length; i++) {
    var pair = resistanceTable[i];
    if(pair.barcode == barcode && pair.antibiotic == antibiotic) return true;
  }
  return false;
}
resistanceTable.getResistance = function(barcode, antibiotic) {
  for (var i = 0; i < resistanceTable.length; i++) {
    var pair = resistanceTable[i];
    if(pair.barcode == barcode && pair.antibiotic == antibiotic)
      return pair.resistance;
  }
  return undefined;
}



var RawEntry = function(data) {
  this.barcode = data[0];
  this.antibiotic = data[1];
  this.site = data[2];
  this.recommended = data[3];
  this.resistance = data[4];
}

function readCSV(data) {
  var dataLines = data.split('\n');

  var fields = [''];

  for(var i = 1; i < dataLines.length; ++i) {
    entries.push(new RawEntry(dataLines[i].split(',')));
  }
}

function createTables() {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if(entry.antibiotic == undefined) continue;

    if(barcodes.indexOf(entry.barcode) < 0) barcodes.push(entry.barcode);
    if(antibiotics.indexOf(entry.antibiotic) < 0) antibiotics.push(entry.antibiotic);
    if(sites.indexOf(entry.site) < 0) sites.push(entry.site);
    console.log(antibiotics);
    console.log(sites);

    if(entry.site !== 'Any')
    {
      siteTable.push({
        barcode: entry.barcode,
        antibiotic: entry.antibiotic,
        site: entry.site,
        recommended: (entry.recommended === 'YES')? true : false});
    }

    if(resistanceTable.hasPair(entry.barcode, entry.antibiotic)) {
      var res = resistanceTable.getResistance(entry.barcode, entry.antibiotic);
      if(res != entry.resistance) console.log('Resistance mismatch on ' + entry.barcode + '/' + entry.antibiotic +  '. ' + res + ' vs. ' + entry.resistance);
    } else {
      resistanceTable.push({barcode: entry.barcode, antibiotic: entry.antibiotic, resistance: entry.resistance});
    }
  }
}

function display() {
  // for(var i = 0; i < entries.length; ++i) {
  //   var e = entries[i];
  //   $('body').append('<p>' + e.barcode + ' ' + e.antibiotic + ' ' + e.site + ' ' + e.recommended + ' ' + e.resistance + '</p>');
  // }
  for (var i = 0; i < siteTable.length; i++) {
    var st = siteTable[i];
    $('body').append('<p>' + st.site + ', ' + st.barcode + ' and ' + st.antibiotic + ': ' + (st.recommended? 'YES' : 'NO') + '</p>');
  }

  for (var i = 0; i < resistanceTable.length; i++) {
    var rt = resistanceTable[i];
    $('body').append('<p>' + rt.barcode + ' vs. ' + rt.antibiotic + ' resistance: ' + rt.resistance + '%' + '</p>');
  }
}

$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'BacNeT.csv',
    dataType: 'text',
    success: function(data){readCSV(data);}
  }).then(function() {
    createTables();
  }).then(function() {
    display();
  })
});
