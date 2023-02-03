import { DataContact } from "../../contexts/UserContext";
import { CardStyled } from "./styles";

const CardContact = ({name, email, telephone, createdAt}: DataContact) => {
  return (
    <CardStyled>
      <div className="container-list">
        <h3>
          Nome completo: <span>{name}</span>
        </h3>
        <h4>
          Email: <span>{email}</span>
        </h4>
        <h5>
          Telefone: <span>{telephone}</span>
        </h5>
        <h6>
          Adicionado em: <span>{createdAt}</span>
        </h6>
      </div>
    </CardStyled>
  );
};

export default CardContact;
