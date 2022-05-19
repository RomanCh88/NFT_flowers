/**
 * Task to register routes.
 */

const express = require("express");

const api = __require("routes");

/**
 * Task handler.
 *
 * @param {object} service - Service instance.
 * @param {function} next - the callback to call.
 */
module.exports = async (service, next) => {
  try {
    const router = express.Router();
    api.register(router);
    service.use("/", router);

    next();
  } catch (error) {
    next(error);
  }

  // eslint-disable-next-line
  console.log("Routes registered".yellow);
  next();
};
