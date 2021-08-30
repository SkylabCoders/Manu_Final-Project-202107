require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/ddbbConfig');

const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(morgan('dev'));

const userRouter = require('./src/routers/userRouter');
const loginRouter = require('./src/routers/cartRouter');

server.use('/api/user', userRouter);
server.use('/api/login', loginRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
