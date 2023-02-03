import FormLogin from "../../components/FormLogin";
import {
  ContainerPage,
  SpanStyled,
} from "../../components/PagesComponents/styles";
import {Link} from "react-router-dom"

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
            Ainda não possui cadastro? <Link to={"/register"}>Cadastrar-se</Link>
          </SpanStyled>
        </div>
      </section>
    </ContainerPage>
  );
};

export default Login;
