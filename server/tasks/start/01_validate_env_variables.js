/**
 * Task to verify environment variables.
 */

const envalid = require("envalid");

/**
 * Task handler.
 *
 * @param {object} service - Service instance.
 * @param {function} next - the callback to call.
 */
module.exports = async (service, next) => {
  try {
    const { str } = envalid;

    const validationOptions = {
      FIREBASE_DATABASE_URL: str(),
      FIREBASE_STORAGE_BUCKET: str(),
    };

    envalid.cleanEnv(process.env, validationOptions);
  } catch (error) {
    next(error);
  }

  // eslint-disable-next-line
  console.log("Environment variables validated".yellow);
  next();
};
