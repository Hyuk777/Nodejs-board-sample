const mongoose = require('mongoose');

// 댓글 스키마
const { Schema } = mongoose;
const { Types: { ObjectId }} = Schema;
const commentSchema = new Schema({
    commenter: { type: ObjectId, required: true, ref:'User', },
    comment: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now(), },
}, {
    versionKey: false, // "__v" 필드 생성 x
});

module.exports = mongoose.model('Comment', commentSchema);