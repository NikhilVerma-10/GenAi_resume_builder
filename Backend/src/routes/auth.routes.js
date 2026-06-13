// const express = require('express')
// const authRouter = express.Router()

const { Router } = require('express')
const authController = require("../controllers/auth.controller")
const {authUser} = require("../middlewares/auth.middleware")
const authRouter = Router()

//JsDoc comment
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login",authController.loginUserController)

/**
 * @route GET /api/auth/request
 * @description clear token from user cookie and add the token in blacklist
 * @access PUBLIC
 */
authRouter.get("/logout", authController.LogoutUserController)

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access Private
 */
authRouter.get('/get-me', authUser, authController.getMeController)

module.exports = authRouter