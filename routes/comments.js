var express = require('express');
var router = express.Router();
const comments_controller = require('./controllers/comments_controllers');

// 선택한 사용자 댓글 조회
router.get('/:id', comments_controller.get_comments);

// 댓글 등록
router.post('/', comments_controller.save_comment);

// 선택한 사용자 댓글 수정
router.patch('/:id', comments_controller.update_comment);

// 선택한 사용자 댓글 삭제
router.delete('/:id', comments_controller.delete_comment);

module.exports = router;