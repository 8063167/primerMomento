// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

export const addMessage = functions.https.onRequest((req: any, res: any) => {
    // Grab the text parameter.
         return admin.firestore().colleccion("Dispositivos").add({
            serial: req.query.serial,
            marca: req.query.marca,
            tipo: req.query.tipo,
            ram: req.query.ram,
            discoD: req.query.discoD
        }).then((response: any) => {
            res.send(response);
        }).catch((err: any) => {
            res.send(err);
        });
  });



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

