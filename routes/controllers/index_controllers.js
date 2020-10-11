const User = require('../../models/users');

exports.renderingMongoose = async (req, res, next) => {
    try {
        const users = await User.find();
        res.render('mongoose', { users });
    } catch (error) {
        console.error(error);
        next(error);
    }
};