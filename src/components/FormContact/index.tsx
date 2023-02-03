import {
  ButtonFormStyled,
  InputStyled,
  LabelStyled,
  SpanFormStyled,
} from "../FormComponents/styles";
import { FormContactStyled } from "./styles";

const FormContact = () => {
  return (
    <FormContactStyled>
      <h3>Cadastre um novo contato</h3>
      <LabelStyled htmlFor="name">Nome completo</LabelStyled>
      <InputStyled type="text" id="name" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled type="text" id="email" />
      <SpanFormStyled>error</SpanFormStyled>
      <LabelStyled htmlFor="telephone">Telefone</LabelStyled>
      <InputStyled type="text" id="telephone" />
      <SpanFormStyled>error</SpanFormStyled>
      <ButtonFormStyled>Adicionar</ButtonFormStyled>
    </FormContactStyled>
  );
};

export default FormContact;
