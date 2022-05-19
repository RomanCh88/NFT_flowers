const admin = __require("helpers/firebase");

const ref = admin.database().ref();
const usersRef = ref.child("users");

const getUser = async (req, res) => {
  const { uid } = req.user;

  const result = await usersRef
    .child(`${uid}`)
    .once("value")
    .then((snap) => snap.val());

  res.status(200).send({ ...result });
};

module.exports = {
  getUser,
};
