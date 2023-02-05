import { useContext, useEffect, useState } from "react";
import FormContact from "../../components/FormContact";
import Header from "../../components/Header";
import ListContacts from "../../components/ListContacts";
import { UserContext } from "../../contexts/UserContext";
import { DashboardStyled } from "./styles";

const Dashboard = () => {
  const { isLoading, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return isLoading ? (
    <div>teste</div>
  ) : (
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
