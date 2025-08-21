import mongoose from "mongoose";

import { CustomError } from "../error/CustomError.js";
import User from "../schemas/user.js";

export const getUserByEmail = (email) => {
    const user = mongoose.findOne({ email });
    return user;
};

export const getUserByName = (name) => {
    const user = mongoose.findOne({ username: name });
    return user;    
};

export const createUser = (user) => {
    const user = mongoose.create(user);
    return user;
};

export const updateUser = (id, userData) => {
   const updatedUser = mongoose.findByIdAndUpdate(id, userData, { new: true });
   return updatedUser;
};

export const deleteUser = (id) => {
    const deletedUser = mongoose.findByIdAndDelete(id);
    return deletedUser;
};

export const getAllUsers = () => {
    const users = mongoose.find({});
    return users;
};

export const getUserById = (id) => {
    const user = mongoose.findById(id);
    return user;
};