const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:3000"}));

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

app.post('/delete/:id', (req, res) => {
  res.json(data.filter(datum => datum.id === parseInt(req.params.id)).length === 0
    ? {error: {message: "THAT ID DOES NOT EXIST"}}
    : data.filter(datum => datum.id !== parseInt(req.params.id)))
});

app.post('/deleteAll', (req, res) => {
  data = [];
  nextId = 0;
  res.json(data);
});

app.post('/update/:id', (req, res) => {
  if( data.filter(datum => datum.id === parseInt(req.params.id)).length === 0) {
    res.json({error: {message: "THAT ID DOES NOT EXIST"}});
  }
  res.send(data = Object.values(data).map(datum => datum.id === parseInt(req.params.id)
    ? ({...datum, ...req.body})
    : datum
  ));
});

app.get('/:id', (req, res) => {
  res.json(data.filter(datum => datum.id === parseInt(req.params.id)).length === 0
    ? {error: {message: "THAT ID DOES NOT EXIST"}}
    : data.filter(datum => datum.id === parseInt(req.params.id)));
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
