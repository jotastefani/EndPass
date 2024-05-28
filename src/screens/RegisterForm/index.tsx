import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Função para validar o email
function isValidEmail(email: string) {
  // Implemente sua lógica de validação de email aqui
  // Retornando verdadeiro se o email for válido e falso caso contrário
}

// Shape dos valores do formulário
interface FormValues {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

// Componente interno do formulário
const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <Field type="text" name="firstName" placeholder="Nome" />
      {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

      <Field type="text" name="lastName" placeholder="Sobrenome" />
      {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}

      <Field type="text" name="cpf" placeholder="CPF" />
      {touched.cpf && errors.cpf && <div>{errors.cpf}</div>}

      <Field type="email" name="email" placeholder="E-mail" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="email" name="confirmEmail" placeholder="Confirmar E-mail" />
      {touched.confirmEmail && errors.confirmEmail && <div>{errors.confirmEmail}</div>}

      <Field type="password" name="password" placeholder="Senha" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <Field type="password" name="confirmPassword" placeholder="Confirmar Senha" />
      {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}

      <button type="submit" disabled={isSubmitting}>
        Ok
      </button>
    </Form>
  );
};

// Props do componente de formulário
interface MyFormProps {
  message: string;
}

// Componente de formulário envolvido com withFormik HoC
export const RegisterForm = withFormik<MyFormProps, FormValues>({
  // Mapeando props externas para os valores do formulário
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  }),

  // Validando os valores do formulário
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    // Adicione suas regras de validação aqui

    return errors;
  },

  // Lidando com a submissão do formulário
  handleSubmit: (values: FormValues, { setSubmitting }) => {
    // Realize as ações de submissão aqui
    // Por exemplo, fazer uma chamada à API
    console.log(values);

    // Sinalizando que a submissão foi concluída
    setSubmitting(false);
  },
})(InnerForm);


