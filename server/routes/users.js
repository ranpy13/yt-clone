import express from "express"
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, updateUser } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()

router.put("/:id", verifyToken, updateUser)
router.delete("/:id", verifyToken, deleteUser)
router.get("/find/:id", getUser)
router.put("/sub/:id", verifyToken, subscribe)
router.put("/unsub/:id", verifyToken, unsubscribe)
router.put("/like/:videoId", verifyToken, like)
router.put("/dislike/:videoId", verifyToken, dislike)

export default router