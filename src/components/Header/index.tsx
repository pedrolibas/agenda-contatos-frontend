import { HeaderStyled } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyled>
      <div>
        <h2>{user.name}</h2>
        <button>Sair</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
