import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import { deleteMediaFromCloudinary, uploadMedia } from '../utils/cloudinary.js';
import upload from '../utils/multer.js';


// Register User
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    // set token cookie
    generateToken(res, user._id);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to register user", error });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
    // set token cookie
    generateToken(res, user._id);
    return res.status(200).json({
      success: true,
      message: `Welcome back ${user.name}`,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to login", error });
  }
};

// Logout User
export const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to logout", error });
  }
};


// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to get user profile", error });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { name } = req.body;
    const profilePhoto = req.file;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!profilePhoto) {
      return res.status(400).json({
        success: false,
        message: "Profile photo is required",
      });
    }

    // Delete old photo if exists
    if (user.photoUrl) {
      const publicId = user.photoUrl.split("/").pop().split(".")[0];
      await deleteMediaFromCloudinary(publicId);
    }

    // Upload new photo
    const cloudResponse = await uploadMedia(profilePhoto.path);
    const { secure_url: photoUrl } = cloudResponse;

    const updatedData = { name, photoUrl };
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    }).select("-password");

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in updateProfile:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};
