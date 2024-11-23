import { Router } from "express";
import { login } from "../authentification/login.js";
import loginRules from "../Validations/loginValidation.js";

const authRoute= Router();

authRoute.post("/", loginRules, login)

export default authRoute;