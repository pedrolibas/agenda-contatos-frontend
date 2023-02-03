import FormLogin from "../../components/FormLogin";
import {
  ContainerPage,
  SpanStyled,
} from "../../components/PagesComponents/styles";

const Login = () => {
  return (
    <ContainerPage>
      <section>
        <div className="container-side">
          <h2>Bem-vindo a sua agenda!</h2>
        </div>
        <div className="container-form">
          <h1>Agenda</h1>
          <FormLogin />
          <SpanStyled>
            Ainda não possui cadastro? <a>Cadastrar-se</a>
          </SpanStyled>
        </div>
      </section>
    </ContainerPage>
  );
};

export default Login;
