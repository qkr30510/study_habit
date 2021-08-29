const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '비밀번호입력',
    database: 'base_sql'
});

module.exports = db;