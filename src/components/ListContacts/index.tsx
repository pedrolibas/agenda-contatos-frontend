import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardContact from "../CardContact";
import { ListStyled } from "./styles";

const ListContacts = () => {
  const { contacts } = useContext(UserContext);
  return (
    <ListStyled>
      {
        contacts.map(contact => <CardContact name={contact.name} email={contact.email} telephone={contact.telephone} createdAt={contact.createdAt} id={contact.id}/>)
      }
    </ListStyled>
  );
};

export default ListContacts;
