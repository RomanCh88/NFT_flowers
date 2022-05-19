const admin = require("../helpers/firebase");

const ref = admin.database().ref();

const checkAccessToAdmin = () => async (req, res, next) => {
  try {
    const { uid, aid } = req.user;

    const isExists = await ref
      .child(`users/${uid}/config/isAdmin`)
      .once("value")
      .then((snap) => snap.exists());

    console.log(isExists);
    if (!isExists) return res.status(403).send();
    return next();
  } catch (error) {
    return res.status(500).send();
  }
};

module.exports = { checkAccessToAdmin };
