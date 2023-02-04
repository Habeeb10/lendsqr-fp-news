import React from 'react';
import {Formik} from 'formik';
import InputFormFieldNormal from '../../../components/InputFormFieldNormal';
import * as yup from 'yup';
import {Button} from '../../../components/Button';
import {CommonStyles} from '../../../common/styles/CommonStyles';

const SignUpProfile = ({navigation}: {navigation: any}) => {
  const signUpValidationSchema = yup.object().shape({
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
  });

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          firstname: '',
          lastname: '',
          emailAddress: '',
          phoneNumber: yup.number,
        }}
        onSubmit={() => navigation.navigate('signin')}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange('firstname')}
              onBlur={handleBlur('firstname')}
              value={values.firstname}
              type="firstname"
              formikProps={{
                errors: errors.firstname,
                touched: touched.firstname,
              }}
              autoFocus
            />

            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              value={values.lastname}
              type="lastname"
              formikProps={{
                errors: errors.lastname,
                touched: touched.lastname,
              }}
              autoFocus={false}
            />
            <InputFormFieldNormal
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
            />

            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange('emailAddress')}
              onBlur={handleBlur('emailAddress')}
              value={values.emailAddress}
              type="email"
              formikProps={{
                errors: errors.emailAddress,
                touched: touched.emailAddress,
              }}
              autoFocus
            />

            <Button
              title="Continue"
              onPressButton={handleSubmit}
              style={CommonStyles.signupwithgoogle}
              styleText={CommonStyles.textStyle}
              disabled={!isValid}
              icon={undefined}
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
