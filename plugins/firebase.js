import firebase from "firebase"

// const config = {
//     projectId: process.env.FIREBASE_PROJECT_ID
// }

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCD8RJFr76ueUOH5sePkGAwCNw-Uj03qhI",
    authDomain: "nuxt-project-6ddce.firebaseapp.com",
    databaseURL: "https://nuxt-project-6ddce.firebaseio.com",
    projectId: "nuxt-project-6ddce",
    storageBucket: "nuxt-project-6ddce.appspot.com",
    messagingSenderId: "1000372852782",
    appId: "1:1000372852782:web:55cad2fd070fcfa0a4a7bf",
    measurementId: "G-E841NDEL0W"
  };
  // Initialize Firebase
  if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

// if(!firebase.apps.length) {
//     firebase.initializeApp(config)
// }

export default firebase