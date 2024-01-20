import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser"
// import bodyParser from "body-parser"

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO)
    .then( ()=>{
        console.log("connected to db")
    })
    .catch((err) => {
        throw err
    })
}

app.use(express.json())
app.use(cookieParser)
// app.use(bodyParser)
app.use("/api/auth", authRoute)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success: false,
        status: status,
        message: message,
    })
})

app.listen(8000, () => {
    connect()
    console.log("connected")
})