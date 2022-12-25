import { Router } from "express";
import * as controller from "../controller/index.js";

const router = Router();

router
  .route("/post/:postId/comments")
  .post(controller.addCommentController)
  .get(controller.getCommentsOnPost);

export default router;
