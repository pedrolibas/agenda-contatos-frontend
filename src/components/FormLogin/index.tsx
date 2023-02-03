import {
  ButtonFormStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SpanFormStyled,
} from "../FormComponents/styles";

const FormLogin = () => {
  return (
    <FormStyled>
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled type="text" id="email" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="Password">Senha</LabelStyled>
      <InputStyled type="text" id="Password" />
      <SpanFormStyled>error</SpanFormStyled>
      <ButtonFormStyled>Entrar</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormLogin;
