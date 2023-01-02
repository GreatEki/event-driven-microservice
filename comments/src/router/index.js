import { Router } from "express";
import * as controller from "../controller/index.js";

const router = Router();

router
  .route("/post/:postId/comments/add")
  .post(controller.addCommentController)
  .get(controller.getCommentsOnPost);

router.route("/events").post(controller.handlePostRequestFromEventBus);

export default router;
