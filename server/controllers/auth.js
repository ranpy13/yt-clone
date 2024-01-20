import { mongoose } from "mongoose"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password: hash})

        await newUser.save()
        res.status(200).send("User has been created")
    } catch (err) {
        next(createError(400, "duplicate user!"))
    }
}

export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({name: req.body.name})
        const {password, ...otherDetails} = user._doc
        if (!user)
            return next(createError(404, "user not found"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect)
            return next(createError(404, "wrong credentials"))

        const token = jwt.sign({id: user._id}, process.env.JWT)
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(otherDetails)
    } catch (err) {
        next(err)
    }
}