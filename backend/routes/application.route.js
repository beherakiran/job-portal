import express from "express";
import isAuthanticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedjobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();
router.route("/apply/:id").post(isAuthanticated, applyJob);
router.route("/get").get(isAuthanticated, getAppliedjobs);
router.route("/:id/applicants").get(isAuthanticated,getApplicants);
router.route("/status/:id/update").put(isAuthanticated, updateStatus);
export default router;