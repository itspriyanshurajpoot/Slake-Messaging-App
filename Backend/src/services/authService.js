import bcrypt from 'bcryptjs';

import { CustomError } from '../error/CustomError';
import userRepository from '../repositories/user.js';
import { generateJwt } from '../utils/jwt.js';

export const signUp = async (data) => {
  const user = await userRepository.findByEmail(data.email);
  if (user) {
    throw new CustomError('Email already registered', 400);
  }

  const username = await userRepository.findByUsername(data.username);
  if (username) {
    throw new CustomError('Username already taken', 400);
  }

  const newUser = await userRepository.create(data);
  return newUser;
};

export const signIn = async (credential) => {
  const user = await userRepository.findByEmail(credential.email);
  if (!user) {
    throw new CustomError('Invalid email', 401);
  }

  const isValidPassword = bcrypt.compareSync(
    credential.password,
    user.password
  );
  if (!isValidPassword) {
    throw new CustomError('Invalid password', 401);
  }

  const jwtToken = await generateJwt({
    id: user._id,
    email: user.email,
    username: user.username
  });
  return {
    jwtToken: jwtToken,
    data: { email: user.email, username: user.username }
  };
};
