import {
  ButtonFormStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SpanFormStyled,
} from "../FormComponents/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../validators/validators";
import { DataRegister, UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const FormRegister = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRegister>({
    resolver: yupResolver(schemaRegister),
  });
  return (
    <FormStyled onSubmit={handleSubmit(userRegister)}>
      <LabelStyled htmlFor="name">Nome completo</LabelStyled>
      <InputStyled type="text" id="name" {...register("name")} />
      <SpanFormStyled>{errors.name?.message}</SpanFormStyled>
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled type="text" id="email" {...register("email")} />
      <SpanFormStyled>{errors.email?.message}</SpanFormStyled>
      <LabelStyled htmlFor="telephone">Telefone</LabelStyled>
      <InputStyled type="text" id="telephone" {...register("telephone")} />
      <SpanFormStyled>{errors.telephone?.message}</SpanFormStyled>
      <LabelStyled htmlFor="password">Senha</LabelStyled>
      <InputStyled type="password" id="password" {...register("password")} />
      <SpanFormStyled>{errors.password?.message}</SpanFormStyled>
      <LabelStyled htmlFor="confirmPassword">Confirme sua senha</LabelStyled>
      <InputStyled
        type="password"
        id="confirmPassword"
        {...register("confirmPassword")}
      />
      <SpanFormStyled>{errors.confirmPassword?.message}</SpanFormStyled>
      <ButtonFormStyled type="submit">Cadastrar</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormRegister;
