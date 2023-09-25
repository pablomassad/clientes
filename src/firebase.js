import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDVXm6zviniUGbxNYt4IkID7h1SLUFK0ZY",
    authDomain: "pypacc-6b17b.firebaseapp.com",
    databaseURL: "https://pypacc-6b17b.firebaseio.com",
    projectId: "pypacc-6b17b",
    storageBucket: "pypacc-6b17b.appspot.com",
    messagingSenderId: "412870176697",
    appId: "1:412870176697:web:769dcc4a6ced180c785068"
}

firebase.initializeApp(firebaseConfig)
export default firebase

