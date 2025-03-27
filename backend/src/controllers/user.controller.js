import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { errorHandler } from "../middleware/errorHandler.js";

dotenv.config();

export const updateUser = async (req, res, next) => {

    let { password, username, email, profilePicture } = req.body;

    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allow to update this user'));
    }
    if (password) {
        if (password.length < 6) {
            return next(errorHandler(400, 'Password atleast 6 charactera'));
        }
        password = await bcryptjs.hash(password, 10)
    }
    if (username) {
        if (username < 7 || username.length > 20) {
            return next(errorHandler(400, 'Username must be between 7 or 20 characters'));
        }
        if (username.includes(' ')) {
            return next(errorHandler(400, 'Username cannot contail space'));
        }
        if (username !== username.toLowerCase()) {
            return next(errorHandler(400, 'Username must be lowercase'));
        }
        if (!username.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler(400, 'Username can only contain letters and numbers'));
        }
    }
    try {

        const updateUser = await userModel.findByIdAndUpdate(req.params.userId, {
            $set: {
                username: username,
                email: email,
                profilePicture: profilePicture,
                password: password
            }
        }, {
            new: true
        });

        const { password: pass, ...rest } = updateUser._doc;

        res.status(200).json({
            status: 'success',
            message: 'User details update successfully',
            user: rest
        });

    } catch (error) {
        console.log('update user error : ', error)
        next(errorHandler(500, 'Internal server error'));
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(403, "You are not allowed to delete this user");
    }
    try {
        await userModel.findByIdAndDelete(req.params.userId);

        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully'
        })
    } catch (error) {
        console.log('delete user error : ', error)
        next(errorHandler(500, 'Internal server error'));
    }
};

export const signOut = async (req, res, next) => {
    try {
        res.clearCookie('jwt');

        res.status(200).json({
            status: 'success',
            message: "User has been signed out"
        })
    } catch (error) {
        console.log('signout user error : ', error)
        next(errorHandler(500, 'Internal server error'));
    }
};

export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to see all users'));
    }
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'asc' ? 1 : -1;
  
      const users = await userModel.find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });
  
      const totalUsers = await userModel.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthUsers = await userModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        users: usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const getUser = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.params.userId);
      if (!user) {
        return next(errorHandler(404, 'User not found'));
      }
      const { password, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };