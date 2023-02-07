import firebase from 'firebase/app';
import 'firebase/auth';

export const signInWithGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);

    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
};
