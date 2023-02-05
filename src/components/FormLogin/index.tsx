import { useForm } from "react-hook-form";
import {
  ButtonFormStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SpanFormStyled,
} from "../FormComponents/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validators/validators";
import { DataLogin, UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const FormLogin = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <FormStyled onSubmit={handleSubmit(userLogin)}>
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled type="text" id="email" {...register("email")} />
      <SpanFormStyled>{errors.email?.message}</SpanFormStyled>
      <LabelStyled htmlFor="password">Senha</LabelStyled>
      <InputStyled type="password" id="password" {...register("password")} />
      <SpanFormStyled>{errors.password?.message}</SpanFormStyled>
      <ButtonFormStyled type="submit">Entrar</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormLogin;
