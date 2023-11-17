const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Database query error: ' + err);
      res.status(500).send('Database error');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
