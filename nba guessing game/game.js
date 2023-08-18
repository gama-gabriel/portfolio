const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nba'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
var nome = 'Paul George'
connection.query
(

    `SELECT * FROM 2023_stats WHERE PName = "${nome}"`,
    function(err, results, fields) 
    {
        for (const property in results[0])
            console.log(`${property}: ${results[0][property]}`, end = ''); // results contains rows returned by server

    }
)
// Perform database operations here

// Close the connection when done
connection.end();
