import express from 'express';
import statusCodes from 'http-status-codes';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRoutes from './routes/apiRoutes.js';

// Starting the express
const app = express();

// Some In-Built middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

// Routing
app.use('/api', apiRoutes);

// Testing API
app.get('/', (req, res) => {
  res.status(statusCodes.OK).json({
    success: true,
    message: 'Welcome to the Slack Messaging App'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
