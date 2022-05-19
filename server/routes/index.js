const fs = require("fs");
const path = require("path");
const { errors } = require("celebrate");

const { authMiddleware } = __require("middleware/auth");
const { errorMiddleware } = __require("middleware/error");

module.exports = {
  register: (service) => {
    service.use(authMiddleware);

    const getFiles = (currentDirectory) => {
      fs.readdirSync(currentDirectory, { withFileTypes: true }).forEach(
        (file) => {
          if (file.isFile()) {
            if (file.name !== "index.js" && file.name.indexOf(".js") !== -1) {
              // eslint-disable-next-line
              const route = require(`${currentDirectory}/${path.basename(
                file.name,
                ".js"
              )}`);
              if (typeof route.register === "function") route.register(service);
            }
          } else {
            const nextDirectory = `${currentDirectory}/${file.name}`;
            getFiles(nextDirectory);
          }
        }
      );
    };

    getFiles(__dirname);

    service.use(errors());
    service.use(errorMiddleware);
  },
};
