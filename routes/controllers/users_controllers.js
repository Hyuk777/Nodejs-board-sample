const User = require('../../models/users');

// 사용자 조회
exports.get_users = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// 사용자 등록
exports.save_user = async (req, res, next) => {
    try {
        const users = new User({
            name: req.body.name,
            age: req.body.age,
            married: req.body.married,
        });
        users.save();
        res.status(201).json(users);
    } catch (error) {
        console.error(error);
        next(error);
    }
};