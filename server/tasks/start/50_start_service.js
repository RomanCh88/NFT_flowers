/**
 * Task to start service instance.
 */

const serverConfig = require("../../config/server");

/**
 * Task handler.
 *
 * @param {object} service - Service instance.
 * @param {function} next - the callback to call.
 */

module.exports = async (service, next) => {
  const { port, host } = serverConfig;

  service.listen(port, host, () => {
    console.log(`Service started on ${port}`.yellow);
    next();
  });
};
