const express = require('express');
const db = require('./config/db');
const cors = require('cors'); // [추가] cors 패키지 불러오기
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // [추가] CORS 미들웨어 사용. 모든 도메인의 요청을 허용합니다.
app.use(express.json());

// ... (app.get, app.post 등 나머지 코드는 그대로) ...

// JSON 형식의 요청 본문을 파싱하기 위한 미들웨어
app.use(express.json());

// 기본 경로(루트)에 대한 GET 요청 처리
app.get('/', (req, res) => {
    res.send('Book Review 백엔드 서버');
});

// 모든 리뷰를 조회하는 API 엔드포인트
app.get('/api/reviews', async (req, res) => {
    try {
        const { search, sort } = req.query; // URL 쿼리에서 search와 sort 값을 가져옴

        let sql = 'SELECT * FROM reviews';
        const params = [];

        if (search) {
            // 검색어가 있으면 WHERE 절을 추가하여 여러 컬럼에서 검색
            sql += ' WHERE title LIKE ? OR book_title LIKE ? OR content LIKE ? OR author LIKE ? OR genre LIKE ?';
            const searchTerm = `%${search}%`;
            // 모든 ?에 동일한 검색어를 바인딩
            params.push(searchTerm, searchTerm, searchTerm, searchTerm, searchTerm);
        }

        // 정렬 순서 적용
        const sortOrder = sort === 'oldest' ? 'ASC' : 'DESC';
        sql += ` ORDER BY id ${sortOrder}`;

        const [rows, fields] = await db.query(sql, params);
        res.json(rows);
    } catch (err) {
        console.error('데이터 조회 중 오류 발생:', err);
        res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    }
});

// 서버를 지정된 포트에서 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

// [추가] 새로운 리뷰를 생성하는 API 엔드포인트
app.post('/api/reviews', async (req, res) => {
    try {
        // 프론트엔드에서 보낸 데이터는 req.body에 담겨 있습니다.
        const { book_title, genre, title, author, content } = req.body;

        // 필수 항목들이 모두 있는지 확인
        if (!book_title || !title || !content) {
            return res.status(400).json({ message: '필수 항목을 모두 입력해주세요.' });
        }

        const sql = 'INSERT INTO reviews (book_title, genre, title, author, content, date) VALUES (?, ?, ?, ?, ?, ?)';
        const now = new Date();
        const values = [book_title, genre, title, author, content, now];

        // 데이터베이스에 쿼리 실행
        const [result] = await db.query(sql, values);

        // 성공적으로 추가되었음을 클라이언트에게 알림 (HTTP 상태 코드 201: Created)
        res.status(201).json({
            message: '리뷰가 성공적으로 등록되었습니다.',
            reviewId: result.insertId, // 새로 생성된 리뷰의 ID
        });
    } catch (err) {
        console.error('데이터 추가 중 오류 발생:', err);
        res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    }
});
