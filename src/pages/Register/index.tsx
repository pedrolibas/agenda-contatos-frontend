import FormRegister from "../../components/FormRegister";
import {
  ContainerPage,
  SpanStyled,
} from "../../components/PagesComponents/styles";

const Register = () => {
  return (
    <ContainerPage>
      <section>
        <div className="container-side">
          <h2>Comece já sua agenda!</h2>
        </div>
        <div className="container-form">
          <FormRegister />
          <SpanStyled>
            Já possui cadastro? <a>Conecte-se</a>
          </SpanStyled>
        </div>
      </section>
    </ContainerPage>
  );
};

export default Register;
