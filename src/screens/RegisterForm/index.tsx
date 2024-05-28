import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from './styles';

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  cpf: string; // Usando string para evitar problemas com números longos
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Muito curto!')
    .max(50, 'Muito longo!')
    .required('Obrigatório'),
  lastName: Yup.string()
    .min(2, 'Muito curto!')
    .max(50, 'Muito longo!')
    .required('Obrigatório'),
  cpf: Yup.string()
    .matches(/^\d{11}$/, 'Deve ser um CPF válido')
    .required('Obrigatório'),
  email: Yup.string().email('Email inválido').required('Obrigatório'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email')], 'Emails não correspondem')
    .required('Obrigatório'),
  password: Yup.string()
    .min(6, 'Senha muito curta!')
    .required('Obrigatório'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Senhas não correspondem')
    .required('Obrigatório'),
});

export const RegisterForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        cpf: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        // Envie os dados para a API ou faça o processamento necessário
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="CPF"
            keyboardType="numeric"
            onChangeText={handleChange('cpf')}
            onBlur={handleBlur('cpf')}
            value={values.cpf}
          />
          {errors.cpf && touched.cpf && (
            <Text style={styles.errorText}>{errors.cpf}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Confirm Email"
            onChangeText={handleChange('confirmEmail')}
            onBlur={handleBlur('confirmEmail')}
            value={values.confirmEmail}
            keyboardType="email-address"
          />
          {errors.confirmEmail && touched.confirmEmail && (
            <Text style={styles.errorText}>{errors.confirmEmail}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          <Button onPress={handleSubmit as any} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
