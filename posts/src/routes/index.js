import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(postController.createPostController);

router.route("/events").post(postController.handlePostRequestFromEventBus);

router.route("/").get(postController.getPostsController);

export default router;
