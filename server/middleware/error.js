const errorMiddleware = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  const { status = 500, message } = error;
  return res.status(status).send({ message });
};

module.exports = {
  errorMiddleware,
};
