module.exports = {
  environment: process.env.NODE_ENV,
  host: "0.0.0.0",
  port: parseInt(process.env.PORT, 10) || 3000,
};
