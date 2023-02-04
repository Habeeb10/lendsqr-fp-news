import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {CommonStyles} from '../common/styles/CommonStyles';

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
  value: any;
  placeholderVisible: boolean;
  formikProps: {errors: any; touched: any};
  type: 'email' | 'firstname' | 'lastname' | 'phoneNumber';
}) => {
  const typeOfEmail = type === 'email';

  return (
    <View style={CommonStyles.formcontainer}>
      {placeholderVisible ? (
        <View style={CommonStyles.formtext}>
          <Text style={CommonStyles.placeholder}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          <Text style={CommonStyles.asteric}>*</Text>
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
