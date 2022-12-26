import { Router } from "express";
import * as controller from "../controller/index.js";

const router = Router();

router.route("/").post(controller.handlePostEvents);

export default router;
