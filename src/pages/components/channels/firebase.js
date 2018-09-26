import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyB-6zimD_S3v-4Z5Ijk46u_txtEQvyuN04",
  authDomain: "wave-tv-app.firebaseapp.com",
  databaseURL: "https://wave-tv-app.firebaseio.com",
  projectId: "wave-tv-app",
  storageBucket: "wave-tv-app.appspot.com",
  messagingSenderId: "169223229787"
};
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
