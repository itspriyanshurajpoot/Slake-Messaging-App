import mongoose from "mongoose";
import { use } from "react";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email alrrady registered"],
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"],
        match: [/^[a-zA-Z0-9_]{3,30}$/, "Username must be 3-30 characters long and can only contain letters, numbers, and underscores"]
    },
    avatar: {
        type: String,
    }
}, {timestamps: true});

userSchema.pre('save', function(next) {
    const user = this;
    user.avatar = `https://robohash.org/${user.username}`;
    next();
});



const User = mongoose.model("User", userSchema);
export default User;