const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database: 'new_schema'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('connected to database')
}
);

//create Routes

module.exports = connection.promise();

