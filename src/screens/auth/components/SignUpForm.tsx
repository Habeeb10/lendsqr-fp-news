import React from 'react';
import {FEMALE, Gender, MALE} from '../../../constants/Gender';
import {View} from 'react-native';
import {Formik} from 'formik';
import InputFormFieldNormal from '../../../components/InputFormFieldNormal';
import * as yup from 'yup';
import {hp} from '../../../common/util/LayoutUtils';
import {Button} from '../../../components/Button';
import * as Colors from '../../../constants/Colors';
import {TextHeader} from '../../../common/text/textHeader';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import RNPickerSelect from 'react-native-picker-select';

const SignUpProfile = ({navigation}: {navigation: any}) => {
  const placeholder = {
    label: 'Select Gender',
    value: 'unknown',
    key: -1,
    color: Colors.black,
  };

  const signUpValidationSchema = yup.object().shape({
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
    gender: yup
      .string()
      .required('Please select a gender')
      .oneOf([MALE, FEMALE]),
  });

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          firstname: '',
          lastname: '',
          gender: '',
          emailAddress: '',
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

            <TextHeader label="Gender" style={[CommonStyles.genderstyle]} />
            <View style={CommonStyles.genderContainer}>
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={value => {
                  handleChange('gender')(value);
                  console.log(values.gender);
                }}
                value={values.gender}
                items={Gender}
                pickerProps={{
                  style: {},
                  itemStyle: {},
                }}
                style={{
                  placeholder: {
                    fontSize: hp(15),
                    lineHeight: hp(20),
                    // fontFamily: 'Euclid-Circular-A',
                    color: Colors.black,
                    fontWeight: '400',
                  },
                }}
              />
            </View>

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
