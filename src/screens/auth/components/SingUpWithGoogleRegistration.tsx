import 'firebase/auth';
import {firebase} from '../../../firebase/config';

async function signUpWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return result;
  } catch (error) {
    throw error;
  }
}

export const handleSignUp = async () => {
  try {
    const result = await signUpWithGoogle();
    console.log('Sign up successful:', result);
  }  .catch((error: any) => {
      alert(error);
    });
  
};
