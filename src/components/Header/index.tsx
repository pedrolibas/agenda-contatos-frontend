import { HeaderStyled } from "./styles";
import { useNavigate } from "react-router-dom"

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h2>Pedrin do libas</h2>
        <button>Sair</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
