import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCZpXedQCFsAheSm1X_9yLYHKtcShLnPOI",
  authDomain: "facebook-2d489.firebaseapp.com",
  projectId: "facebook-2d489",
  storageBucket: "facebook-2d489.appspot.com",
  messagingSenderId: "1059041759561",
  appId: "1:1059041759561:web:febf6fb56ad69d87b60a98",
  measurementId: "G-0ENHZTWDP7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
