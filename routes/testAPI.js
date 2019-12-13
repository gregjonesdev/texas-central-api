var express = require('express');
const { Client } = require('pg');
const connectionString =
  'postgres://postgres:postgres@localhost:5432/txcen';

const client = new Client({
  connectionString: connectionString
});

var router = express.Router();
client.connect();

router.get('/', function(req, res, next) {
    console.log("HEY THERE")
    client.query('SELECT * FROM service_interval',
      function (err, result) {
        if (err) {
          console.log(err);
        }
        res.status(200).send(result.rows)
      })
});

module.exports = router;
