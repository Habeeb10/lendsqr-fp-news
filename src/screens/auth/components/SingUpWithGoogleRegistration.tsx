import firebase from 'firebase/app';
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'your-api-key',
//   authDomain: 'your-auth-domain',
//   databaseURL: 'your-database-url',
//   projectId: 'your-project-id',
//   storageBucket: 'your-storage-bucket',
//   messagingSenderId: 'your-messaging-sender-id',
//   appId: 'your-app-id',
// };

// firebase.initializeApp(firebaseConfig);

const signUpWithGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithRedirect(provider);
    return result;
  } catch (error) {
    throw error;
  }
};

export const handleGoogleSignUp = async () => {
  try {
    const user = await signUpWithGoogle();
    console.log('Google sign up successful:', user);
  } catch (error) {
    console.error('Error signing up with Google:', error);
  }
};
