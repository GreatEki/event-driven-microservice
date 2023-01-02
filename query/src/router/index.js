import { Router } from "express";
import * as controller from "../controller/index.js";

const router = Router();

router.route("/events").post(controller.handlePostEventCreatedController);

router.route("/posts").get(controller.getPostsController);

export default router;
