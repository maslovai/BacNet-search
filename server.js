'use strict';

const express = require('express');
const app = express();

const page = require('page');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const pg = require('pg');
const fs = require('fs');

//const conString = 'postgres://kev:32167@localhost:5432/antibiotics';
const conString = 'postgres://maks@localhost:5432/maks';
// const conString = 'postgres://irynamaslova@localhost:5432/antibiotics';


const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(express.static(__dirname + '/'));
app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


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
