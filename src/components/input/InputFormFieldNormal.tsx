import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {CommonStyles} from '../../common/styles/CommonStyles';
// import {hp} from '../common/util/LayoutUtils';

const InputFormFieldNormal = ({
  value,
  onChangeText,
  placeholderVisible,
  formikProps: {errors, touched},
  type,
  autoFocus,
  onBlur,
}: {
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  autoFocus: boolean;
  value: string;
  placeholderVisible: boolean;
  formikProps: {errors: any; touched: any};
  type: 'email' | 'firstname' | 'phoneNumber' | 'password' | 'fullName';
}) => {
  const typeOfEmail = type === 'email';

  return (
    <View style={CommonStyles.formContainer}>
      {placeholderVisible ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={CommonStyles.formStyle}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
      ) : (
        <></>
      )}
      <TextInput
        style={[CommonStyles.textInput]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        autoFocus={autoFocus}
        autoCapitalize="none"
        keyboardType={typeOfEmail ? 'email-address' : 'default'}
        autoComplete={
          typeOfEmail
            ? 'email'
            : type === 'firstname'
            ? 'name-given'
            : 'name-family'
        }
        textContentType={
          typeOfEmail
            ? 'emailAddress'
            : type === 'firstname'
            ? 'givenName'
            : 'familyName'
        }
      />
      {errors && touched && (
        <Text style={CommonStyles.errorText}>{errors}</Text>
      )}
    </View>
  );
};

export default InputFormFieldNormal;
