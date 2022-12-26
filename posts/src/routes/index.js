import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

router
  .route("/")
  .post(postController.createPostController)
  .get(postController.getPostsController);

router.route("/events").post(postController.handlePostRequestFromEventBus);

export default router;
