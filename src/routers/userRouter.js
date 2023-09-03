import express from "express";
import { edit, remove } from "../controller/userController";

const userlRouter = express.Router();

userlRouter.get("/edit", edit);
userlRouter.get("/remove", remove);

export default userlRouter;