import mongoose from 'mongoose';

import { DEV_DB_URL, NODE_ENV, PROD_DB_URL } from './serverConfig.js';

export default async function connectDB() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(DEV_DB_URL);
    } else if (NODE_ENV === 'production') {
      await mongoose.connection(PROD_DB_URL);
    }
    console.log(`Database Connected with ${NODE_ENV} environment`);
  } catch (error) {
    console.log('Something went wrong while connecting to database');
  }
}
