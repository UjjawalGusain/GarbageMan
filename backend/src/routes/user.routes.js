import {Router} from "express";
import { signupUser } from "../controllers/userAuth.controller.js";

const userRouter = Router()

userRouter.route("/signup").post(signupUser);

export default userRouter;