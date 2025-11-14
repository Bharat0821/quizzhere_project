import express from 'express';
import {login, register, getUserProfile, logout, updateProfile} from '../controller/user.controller.js';
import isAuthenticated  from '../middlewares/isAuthenticated.js';
import upload from '../utils/multer.js';
 // Assuming updateUser is defined in the controller


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/profile/update").put(isAuthenticated, upload.single("profilePhoto"),updateProfile); // Assuming updateUser is defined in the controller

export default router;