const mongoose = require('mongoose');

// 회원 정보 스키마
const { Schema } = mongoose;
const userSchema = new Schema({
    name: { type: String, required: true, unique: true, },
    age: { type: Number, required: true, },
    married: { type: Boolean, required: true, },
    comment: String,
    createdAt: { type: Date, default: Date.now(), },
}, {
    versionKey: false, // "__v" 필드 생성 x
});

module.exports = mongoose.model('User', userSchema);