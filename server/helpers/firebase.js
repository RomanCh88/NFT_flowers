const admin = require("firebase-admin");

let credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// eslint-disable-next-line import/no-dynamic-require
const serviceAccount = require(`../${credentials}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

module.exports = admin;
