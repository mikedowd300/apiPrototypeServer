const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let nextId = 3;

let data = [
  {
    id: 1,
    name: 'Unites States of America',
    capital: 'Washington D.C.',
    languages: ['English'],
    flag: '',
  },
  {
    id: 2,
    name: 'Peru',
    capital: 'Lima',
    languages: ['Spanish', 'Aymara', 'Quechua'],
    flag: '',
  },
];

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:3000"}));

app.post('/delete/:id', (req, res) => {

  let length = data.length;

  if( data.filter(datum => datum.id === parseInt(req.params.id)).length === 0) {
    datum = {error: {message: "THAT ID DOES NOT EXIST"}}
    res.json(datum);
  } else {
    data = data.filter(datum => datum.id !== parseInt(req.params.id));
  }

  res.json(data);
});

app.post('/deleteAll', (req, res) => {
  data = [];
  nextId = 0;
  res.json(data);
});

app.post('/update/:id', (req, res) => {
  if( data.filter(datum => datum.id === parseInt(req.params.id)).length === 0) {
    datum = {error: {message: "THAT ID DOES NOT EXIST"}}
    res.json(datum);
  } else {
    data = Object.values(data).map(datum => {
      if(datum.id === parseInt(req.params.id)) {
        return ({...datum, ...req.body});
      }
      return datum;
    });
  }
  res.send(data);
});

app.get('/:id', (req, res) => {

  const datum = data.filter(datum => datum.id === parseInt(req.params.id)).length === 0
    ? {error: {message: "THAT ID DOES NOT EXIST"}}
    : data.filter(datum => datum.id === parseInt(req.params.id));
  res.json(datum);
});

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/', (req, res) => {
  const newDatum = req.body
  newDatum.id = nextId++;
  data.push(newDatum);
  res.json(data);
});

app.listen(8090);
console.log('listening on 8090...');
