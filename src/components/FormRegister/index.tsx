import {
  ButtonFormStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SpanFormStyled,
} from "../FormComponents/styles";

const FormRegister = () => {
  return (
    <FormStyled action="">
      <LabelStyled htmlFor="name">Nome completo</LabelStyled>
      <InputStyled type="text" id="name" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled type="text" id="email" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="telephone">Telefone</LabelStyled>
      <InputStyled type="text" id="telephone" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="password">Senha</LabelStyled>
      <InputStyled type="text" id="password" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="confirm-password">Confirme sua senha</LabelStyled>
      <InputStyled type="text" id="confirm-password" />
      <SpanFormStyled>error</SpanFormStyled>
      <ButtonFormStyled>Cadastrar</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormRegister;
