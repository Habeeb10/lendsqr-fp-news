import React from 'react';
import {Formik} from 'formik';
import InputFormFieldNormal from '../../../components/InputFormFieldNormal';
import * as yup from 'yup';
import {Button} from '../../../components/Button';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import {Registration} from './FirebaseRegistration';

const SignUpProfile = ({navigation}: {navigation: any}) => {
  const signUpValidationSchema = yup.object().shape({
    password: yup.string().required('Full name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'), // phoneNumber: yup.number().required('phoneNumber is required'),
  });
  // const [isButtonLoading, setButtonLoading] = useState(false);
  // const onConfirm = () => {
  //   setButtonLoading(true);
  //   // TODO: perform api call based on purchaseName and continue to status screen if it is a success
  //   if (true) {
  //     setButtonLoading(true);
  //     navigation.navigate('signin');
  //   } else {
  //     setButtonLoading(false);
  //   }
  // };
  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          Registration(values)
            .then(result => {
              console.log('Success!', result);
            })
            .catch(error => {
              console.error('Error!', error);
            });
          navigation.navigate('signin');
        }}>
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          isValid,
          touched,
          handleSubmit,
        }) => (
          <>
            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              type="email"
              formikProps={{
                errors: errors.email,
                touched: touched.email,
              }}
              autoFocus
            />

            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              type="password"
              formikProps={{
                errors: errors.password,
                touched: touched.password,
              }}
              autoFocus
            />
            {/* <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              type="phoneNumber"
              formikProps={{
                errors: errors.phoneNumber,
                touched: touched.phoneNumber,
              }}
              autoFocus
            /> */}

            <Button
              onPressButton={handleSubmit}
              title="Continue"
              style={CommonStyles.signupwithgoogle}
              styleText={CommonStyles.textStyle}
              icon={undefined}
              disabled={!isValid}
              // buttonLoading={isButtonLoading}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default SignUpProfile;

// const styles = StyleSheet.create({
//   textInput: {
//     width: '100%',
//     borderWidth: 0.5,
//     borderRadius: 5,
//     padding: 15,
//     fontSize: hp(18),
//     // fontFamily: "Euclid-Circular-A",
//   },
//   errorText: {
//     fontSize: hp(14),
//     color: 'red',
//     marginTop: 5,
//   },
// });
