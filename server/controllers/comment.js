import { createError } from "../error.js"
import Comment from "../models/Comment.js"
import Video from "../models/Video.js"

export const addComment = async (req, res, next) => {
    const newComment = new Comment({...req.body, userId: req.user.id})
    try {
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (err) {
        next(err)
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)

        if(req.user.id === comment.userId || req.user.id === video.user.id) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("Comment has been deleted")
        } else {
            return next(createError(403, "You can delete only your comment"))
        }
    } catch (err) {
        next(err)
    }
}

export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({videoId: req.params.videoId})
        res.status(200).json(comments)
    } catch (err) {
        next(err)
    }
}