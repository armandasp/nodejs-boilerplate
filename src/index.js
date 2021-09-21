const express = require('express');
const cors = require('cors');

const { port } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: 'Server is working succesfully' });
});

app.all('*', (req, res) => {
  res.status(400).send({ err: 'Page not found' });
});

app.listen(port, console.log(`Server is running on port ${port}`));
