'use strict';

const express = require('express');
const app = express();

const page = require('page');
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
// const conString = process.env.DATABASE_URL || 'postgres://irynamaslova@localhost:5432/postgres';
// const client = new pg.Client(conString);
//client.connect();
//client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
app.listen(PORT);
