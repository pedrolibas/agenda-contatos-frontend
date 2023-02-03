import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataRequestContact, UserContext } from "../../contexts/UserContext";
import { schemaContact } from "../../validators/validators";
import {
  ButtonFormStyled,
  InputStyled,
  LabelStyled,
  SpanFormStyled,
} from "../FormComponents/styles";
import { FormContactStyled } from "./styles";

const FormContact = () => {
  const { createContact } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRequestContact>({
    resolver: yupResolver(schemaContact),
  });

  return (
    <FormContactStyled onSubmit={handleSubmit(createContact)}>
      <h3>Cadastre um novo contato</h3>
      <LabelStyled htmlFor="name">Nome completo</LabelStyled>
      <InputStyled type="text" id="name" {...register("name")} />
      <SpanFormStyled>{errors.name?.message}</SpanFormStyled>
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled type="text" id="email" {...register("email")} />
      <SpanFormStyled>{errors.email?.message}</SpanFormStyled>
      <LabelStyled htmlFor="telephone">Telefone</LabelStyled>
      <InputStyled type="text" id="telephone" {...register("telephone")} />
      <SpanFormStyled>{errors.telephone?.message}</SpanFormStyled>
      <ButtonFormStyled type="submit">Adicionar</ButtonFormStyled>
    </FormContactStyled>
  );
};

export default FormContact;
