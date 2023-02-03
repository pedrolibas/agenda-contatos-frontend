import { CardStyled } from "./styles";

const CardContact = () => {
  return (
    <CardStyled>
      <div className="container-list">
        <h3>
          Nome completo: <span>Alanzoka top 1 brazilian</span>
        </h3>
        <h4>
          Email: <span>alan@zoka.com</span>
        </h4>
        <h5>
          Telefone: <span>0123456789</span>
        </h5>
        <h6>
          Adicionado em: <span>14/06/5144</span>
        </h6>
      </div>
    </CardStyled>
  );
};

export default CardContact;
