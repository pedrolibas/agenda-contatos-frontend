import { useContext, useEffect, useState } from "react";
import FormContact from "../../components/FormContact";
import Header from "../../components/Header";
import ListContacts from "../../components/ListContacts";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";
import { DashboardStyled } from "./styles";

const Dashboard = () => {
  const { setContacts } = useContext(UserContext);

  useEffect(() => {
    const getToken = localStorage.getItem("@agenda");
    const token = getToken ? JSON.parse(getToken) : null;
    api
      .get("/users", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setContacts(res.data.contacts))
      .catch((err) => console.log(err));
  });

  return (
    <DashboardStyled>
      <Header />
      <section>
        <div>
          <FormContact />
        </div>
        <ListContacts />
      </section>
    </DashboardStyled>
  );
};

export default Dashboard;
