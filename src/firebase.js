import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiMd1h5Fx-77_JZKOrltWFhRc-Svx8ED0",
  authDomain: "ectorecommerce.firebaseapp.com",
  projectId: "ectorecommerce",
  storageBucket: "ectorecommerce.appspot.com",
  messagingSenderId: "457025105738",
  appId: "1:457025105738:web:1bf217560c647ea0321bb3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
