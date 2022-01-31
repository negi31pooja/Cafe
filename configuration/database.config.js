// Import mysql database
const mysql = require('mysql');

// Create connection with database
const database_conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'cafe'
})

// Create function to connect with database
database_conn.connect(function(error){
    if(error){
        throw(error)
    }
})

// Export Database to  use in another part
module.exports = database_conn