const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const Users = require('./models/users');
const routes = require('./app/routes');

const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const connectDb = () => {
  mongoose.connect(
    'mongodb://localhost:27017/users',
    {
      useNewUrlParser: true
    }
  );

  return mongoose.connection;
};

connectDb()
  .on('error', console.log)
  .on('disconnect', connectDb)
  .on('open', () => {
    routes(app, Users);
    app.listen(PORT, () => {
      console.log(`We are live on ${PORT}`);
    });
  });
