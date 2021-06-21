

import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCa-JaxppsUTev7q6P70HFWij0h780lBNs",
    authDomain: "hobby-project-260fa.firebaseapp.com",
    projectId: "hobby-project-260fa",
    storageBucket: "hobby-project-260fa.appspot.com",
    messagingSenderId: "634210336795",
    appId: "1:634210336795:web:6db08f1aca2ed18bf838be",
    measurementId: "G-HN4X98XRD8"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider}