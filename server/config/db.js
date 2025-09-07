const mysql = require('mysql2');
require('dotenv').config(); // .env 파일의 환경 변수를 불러오기 위함

// DB 커넥션 풀(Connection Pool) 생성
// 요청이 있을 때마다 새로 연결하는 것이 아니라, 미리 여러 개의 연결을 만들어두고 재사용하여 효율을 높입니다.
const pool = mysql.createPool({
    host: process.env.DB_HOST, // .env 파일에 설정한 DB 호스트 주소
    user: process.env.DB_USER, // .env 파일에 설정한 DB 사용자 이름
    password: process.env.DB_PASSWORD, // .env 파일에 설정한 DB 비밀번호
    database: process.env.DB_DATABASE, // .env 파일에 설정한 데이터베이스 이름
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// .promise() 메서드를 사용하면 async/await 와 같은 최신 비동기 구문을 사용할 수 있어 편리합니다.
module.exports = pool.promise();
