const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'process.env.HOST',
    user: 'process.env.USER',
    password: 'process.env.PASSWORD',
    database: 'process.env.DATABASE'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected...!')
    }
});

module.exports = connection;
