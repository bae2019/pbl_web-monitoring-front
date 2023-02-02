var mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost", // 호스트
    user: "root",      // 데이터베이스 계정
    password: "td9916",      // 데이터베이스 비밀번호
    database: "new_schema",  // 사용할 데이터베이스
});

module.exports = db;