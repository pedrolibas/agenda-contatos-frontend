import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome completo obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  telephone: yup.string().required("Telefone obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .min(8, "senha precisa ter mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve conter pelo menos um número e um símbolo especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não combinam"),
});

export const schemaContact = yup.object().shape({
  name: yup.string().required("Nome completo do contato obrigatório"),
  email: yup
    .string()
    .required("Email do contato obrigatório")
    .email("Email inválido"),
  telephone: yup.string().required("Telefone do contato obrigatório"),
});
