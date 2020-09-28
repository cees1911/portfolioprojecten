const express = require('express');
const morgan = require('morgan');

const resourceRouter = require('./routes/resourceRoutes');
const userRouter = require('./routes/userRoutes')

const app = express();

// 1: Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2: Routes mounting the routers
app.use('/api/v1/knowledge', resourceRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
