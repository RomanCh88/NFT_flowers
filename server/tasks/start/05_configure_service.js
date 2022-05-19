/**
 * Task to configure service.
 */

const corsMiddleware = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

/**
 * Task handler.
 *
 * @param {object} service - Service instance.
 * @param {function} next - the callback to call.
 */
module.exports = async (service, next) => {
  // TODO: Should be changed to avoid security implications
  const cors = corsMiddleware({ origins: ["http://localhost:8080"] });

  service.use(cors);
  service.use(morgan("combined"));
  service.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  service.use(bodyParser.json({ limit: "50mb", extended: true }));

  // eslint-disable-next-line
  console.log("Service configured".yellow);
  next();
};
