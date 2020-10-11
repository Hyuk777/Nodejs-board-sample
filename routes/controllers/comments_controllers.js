const { update } = require('../../models/comments');
const Comment = require('../../models/comments');

// 선택한 사용자 댓글 조회
exports.get_comments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ commenter: req.params.id }).populate('commenter');
        console.log(comments);
        res.json(comments);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// 댓글 등록
exports.save_comment = async (req, res, next) => {
    try {
        const comment = new Comment({
            commenter: req.body.id,
            comment: req.body.comment,
        });
        comment.save();
        await Comment.populate(comment, { path: 'commenter' });
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        next(next);
    }
}

// 선택한 사용자 댓글 수정
exports.update_comment = async (req, res, next) => {
    try {
        const comment = await Comment.update({ _id: req.params.id }, { comment: req.body.comment });
        res.json(comment);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// 선택한 사용자 댓글 삭제
exports.delete_comment = async (req, res, next) => {
    try {
        const comment = await Comment.remove({ _id: req.params.id });
        res.json(comment);
    } catch (error) {
        console.error(error);
        next(error);
    }
};