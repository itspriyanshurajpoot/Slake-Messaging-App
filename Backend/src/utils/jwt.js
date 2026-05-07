import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config/serverConfig';

export const generateJwt = async (payload) => {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: '1d'
  });
};

export const verifyJwtToken = async (token) => {
  return jwt.verify(token, SECRET_KEY);
};
