const admin = require("../helpers/firebase");

const AuthenticationError = new Error("AuthenticationError");
AuthenticationError.status = 403;

const authMiddleware = async (req, res, next) => {
  const isPublicRoute = req.url.includes("public") ? true : false;

  if (isPublicRoute) {
    return next();
  }

  const token = (req.headers.authorization || "").split("Bearer ").pop();

  if (!token) {
    return next(AuthenticationError);
  }

  try {
    req.user = await admin.auth().verifyIdToken(token);
  } catch (e) {
    return next(AuthenticationError);
  }

  return next();
};

module.exports = { authMiddleware };
