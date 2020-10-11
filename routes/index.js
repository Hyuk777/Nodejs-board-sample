var express = require('express');
var router = express.Router();
const index_controller = require('./controllers/index_controllers');

// mongoose.pug rendering
router.get('/', index_controller.renderingMongoose);

module.exports = router;
