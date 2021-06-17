const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'knp43f8el7ic4vfw',
    password: 't27tfxc4blhquu6q',
    database: 'arou4qaqs3nlxf1y'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected...!')
    }
});

module.exports = connection;
