import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import {Registration} from './FirebaseRegistration';
import InputFormFieldNormal from '../../../components/input/InputFormFieldNormal';
import {Button} from '../../../components/button/Button';

const SignUpProfile = ({navigation}: {navigation: any}) => {
  const signUpValidationSchema = yup.object().shape({
    password: yup.string().required('Full name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
  });

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

            <Button
              onPressButton={handleSubmit}
              title="Continue"
              style={CommonStyles.signupwithgoogle}
              styleText={CommonStyles.textStyle}
              icon={undefined}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default SignUpProfile;
