import express from 'express';
// import upload from '../middleware/multer.js';

import { 
    loginUser, 
    registerUser, 
    adminLogin, 
    } from '../controllers/userController.js';
// import auth from '../middleware/auth.js';



// using this router we create get or post  method
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
// userRouter.get("/admin/users", getAllUsers);

// userRouter.get("/profile", auth, getUserProfile);
// userRouter.put("/update-profile", auth, updateProfile);
// userRouter.post("/upload-profile-image", auth, upload.single('profileImage'), uploadProfileImage);

export default userRouter;  // export the router for use in other parts of the application
