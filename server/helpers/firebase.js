const admin = require("firebase-admin");

let credentials;
if (process.env.NODE_ENV === "production") credentials = process.env.PRODUCTION_GOOGLE_APPLICATION_CREDENTIALS;
else credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// eslint-disable-next-line import/no-dynamic-require
const serviceAccount = require(`../${credentials}`);

if (process.env.NODE_ENV === "production")
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.PRODUCTION_FIREBASE_DATABASE_URL,
    storageBucket: process.env.PRODUCTION_FIREBASE_STORAGE_BUCKET,
  });
else
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });

module.exports = admin;
