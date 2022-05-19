module.exports = {
  environment: process.env.NODE_ENV || "production",
  host: "0.0.0.0",
  port: parseInt(process.env.PORT, 10) || 4050,
};
