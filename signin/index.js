const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const {hash} = require("bcrypt");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyoyeonlee',
  password: 'Password1!',
  database: 'TheraGo'
});

app.post('/register', (req, res) => {
  const { firstname, lastname, age, useremail, password } = req.body;
  const userQuery = 'INSERT INTO Login (firstname, lastname, age) VALUES (?, ?, ?)';
  const userValues = [firstname, lastname, age];

  connection.query(userQuery, userValues, (userErr, userResult) => {
    if (userErr) {
      console.error('Error inserting into User table: ', userErr);
      res.status(500).send('Internal Server Error');
      return;
    }

    const username = firstname + " " + lastname

    const loginQuery = 'INSERT INTO UserRegister (username, hashpwd, useremail) VALUES (?, ?, ?)';
    const loginVal = [username, password, useremail];

    connection.query(loginQuery, loginVal, (loginErr) => {
      if (loginErr) {
        console.error('Error inserting into UserLogin table: ', loginErr);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Data inserted successfully!');
        res.status(200).send('Registration successful!');
      }
    });
  });
});


app.get("/api/Login", (req, res) => {
  const emailLogin = req.query.useremail;
  const query = 'SELECT hashpwd FROM UserRegister WHERE useremail = ?';
  connection.query(query, [emailLogin], (error, result) => {
    if(error){
      console.error('Error fetching data:' , error);
      res.status(500).json({error: 'Internal Server Error'});
      return;
    }
    if (length(results) > 0){
      res.json(null);
    } else{
      const hashedPassword = results[0].password;
      res.json(hashedPassword);
    }
  })
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
