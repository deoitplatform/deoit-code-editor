const firebaseConfig = {
  apiKey: "AIzaSyBRwHlZqbv91_0SfjPDuymSiSh0VXqtnGQ",
  authDomain: "deoit-d2c47.firebaseapp.com",
  projectId: "deoit-d2c47",
  storageBucket: "deoit-d2c47.firebasestorage.app",
  messagingSenderId: "704056232208",
  appId: "1:704056232208:web:5a2e6d7c2525d856623d95"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

function signInGoogle() { return auth.signInWithPopup(googleProvider); }
function signInGithub() { return auth.signInWithPopup(githubProvider); }
function signOut() { return auth.signOut(); }
function onAuth(cb) { auth.onAuthStateChanged(cb); }
function getUser() { return auth.currentUser; }
