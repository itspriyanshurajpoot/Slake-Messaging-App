import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email alrrady registered'],
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username already exists'],
      match: [
        /^[a-zA-Z0-9_]{3,30}$/,
        'Username must be 3-30 characters long and can only contain letters, numbers, and underscores'
      ]
    },
    avatar: {
      type: String
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function setAvatar(next) {
  const user = this;
  user.avatar = `https://robohash.org/${user.username}`;
  next();
});

userSchema.pre('save', function hashPassword(next) {
  const user = this;
  const SALt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(user.password, SALt);
  user.password = hashPassword;
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
