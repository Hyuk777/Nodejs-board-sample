var express = require('express');
var router = express.Router();
const users_controller = require('./controllers/users_controllers');

// 사용자 조회
router.get('/', users_controller.get_users);

// 사용자 등록
router.post('/', users_controller.save_user);

module.exports = router;
