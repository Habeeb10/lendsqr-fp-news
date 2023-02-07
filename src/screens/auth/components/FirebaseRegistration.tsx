import {firebase} from '../../../firebase/config';
import '@firebase/firestore';
import 'firebase/auth';
import '@react-native-firebase/auth';
type RegistrationType = {
  email: string;
  password: string;
  // phoneNumber: number;
  navigation: any;
};
export const Registration = async ({
  navigation,
  email,
  password,
}: // phoneNumber,
RegistrationType) => {
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const uid = response.user.uid;
  const data = {
    id: uid,
    email: '',
    password: '',
  };
  const usersRef = firebase.firestore().collection('users');
  usersRef
    .doc(uid)
    .set(data)
    .then(() => {
      navigation.navigate('signin', {user: data});
    })
    .catch((error: any) => {
      alert(error);
    });
  console.log(email, password);
};

export {firebase};
