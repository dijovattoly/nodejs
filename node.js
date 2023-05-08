//const { error } = require('console');
const express = require('express');
const mysql = require('mysql');

// Create a new instance of an Express app
const app = express();

// Set up a MySQL database connection
const connection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12616103',
  password: '9PJTYZmpng',
  database: 'sql12616103'
});

// Connect to the MySQL database
connection.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Connected!!")
    }
});

// Define an HTTP route that fetches data from the database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM details';
  connection.query(query, (error, results, fields) => {
    if(error){
      console.log(error)
  }
  else{
      console.log("Connected query!!")
  }
    res.json(results);
  });
});


app.listen(3000, (error)=>{
  if(error){
    console.log(error)
}
else{
    console.log("Connected to 3000 port!!")
}
});