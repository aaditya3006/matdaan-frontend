const firebaseConfig = {
  apiKey: "AIzaSyDN4wpvb7CDOV_moUGya9mdIMsCkrGKCAE",
  authDomain: "matdaan-ledger.firebaseapp.com",
  databaseURL: "https://matdaan-ledger-default-rtdb.firebaseio.com",
  projectId: "matdaan-ledger",
  storageBucket: "matdaan-ledger.firebasestorage.app",
  messagingSenderId: "9657070691",
  appId: "1:9657070691:web:312bbb14713c33fa427456",
  measurementId: "G-WPMQ5STWG8"
};

// Initialize Firebase for the whole project
firebase.initializeApp(firebaseConfig);

// Create a global 'database' variable to use in other files
const database = firebase.database();