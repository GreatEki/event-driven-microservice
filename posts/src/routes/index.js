import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

router
  .route("/")
  .post(postController.createPostController)
  .get(postController.getPostsController);

export default router;
