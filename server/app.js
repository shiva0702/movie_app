require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
// const { Sequelize } = require("sequelize");

const models = require('./models')
const apiRoutes = require("./routes")
const { PORT, PG_URI } = process.env;

const startServer = async () => {

  const app = express();

  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send('Server is up and running')
  });

  app.use("/api", apiRoutes);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log(err);
    res.json('error');
  });

  app.listen(PORT, () => {
    console.log(`Server Start in port ${PORT}`);
  });
}

try {
  startServer();
}
catch (error) {
  console.log("Bootstrapping the App Server is Failed!", error)
}