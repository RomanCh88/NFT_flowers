const controllers = __require("controllers/auth");

module.exports = {
  register: (service) => {
    service.get("/auth", controllers.getUser);
  },
};
