const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./proyecto-826a6-8502d202b831.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;