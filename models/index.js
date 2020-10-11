const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    const db_connect = () => {
        // 개발 환경이 아닌 경우 몽구스가 생성하는 쿼리내용을 콘솔을 통해 확인
        if(process.env.NDOE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        // mongodb 연결
        mongoose.connect(process.env.MONGO_URL, (error) => {
            if(error) {
                console.log('mongodb connected error', error);
            } else {
                console.log('Successfully connected to mongodb');
            }
        });
    };
    db_connect();
    
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.log('mongodb connected error', error);
    });
    db.on('disconnected', () => {
        console.log('mongodb disconnected. Retry the connection')
        db_connect();
    });
    require('./users');
    require('./comments');
};