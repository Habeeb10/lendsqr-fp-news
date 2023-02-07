import '@firebase/firestore';
import 'firebase/auth';
import '@react-native-firebase/auth';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCc12I11dH4WdlJ2ipoIxkTxPDMhkruBxQ',
  authDomain: 'lendsqr-fp-news-ac5fb.firebaseapp.com',
  databaseURL: 'https://lendsqr-fp-news-ac5fb-default-rtdb.firebaseio.com/',
  projectId: 'lendsqr-fp-news-ac5fb',
  storageBucket: 'lendsqr-fp-news-ac5fb.appspot.com',
  messagingSenderId: '914246624669',
  appId: '1:914246624669:ios:8769fc93a1b1de8aab7b74',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};

const auth = firebase.auth();

export {auth};
