import express from "express";
import isAuthanticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanybyId, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();
router.route("/register").post(isAuthanticated, registerCompany);
router.route("/get").get(isAuthanticated, getCompany);
router.route("/get/:id").get(getCompanybyId);
router.route("/update/:id").put(isAuthanticated, updateCompany);
export default router;