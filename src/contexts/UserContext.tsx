import React, { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export interface DataLogin {
  email: string;
  password: string;
}

export interface DataRegister {
  name: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword?: string;
}

export interface DataRequestContact {
  name: string;
  email: string;
  telephone: string;
}

export interface DataContact extends DataRequestContact {
  id: string;
  createdAt: string;
}

interface DataUser {
  id: string;
  name: string;
  email: string;
  telephone: string;
  createdAt: string;
  password: string;
}

interface DataProvider {
  userLogin: (data: DataLogin) => void;
  userRegister: (data: DataRegister) => void;
  createContact: (data: DataRequestContact) => void;
  contacts: DataContact[];
  user: DataUser;
  disconnectUser: () => void;
  isLoading: boolean;
  getUser: () => void;
}

export const UserContext = createContext<DataProvider>({} as DataProvider);

const UserProvider = ({ children }: IProps) => {
  const [contacts, setContacts] = useState<DataContact[]>([]);
  const [user, setUser] = useState<DataUser>({} as DataUser);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = (data: DataLogin) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@agenda", JSON.stringify(res.data.token));
        getUser();
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const userRegister = (data: DataRegister) => {
    delete data.confirmPassword;

    api
      .post("/users", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getUser = () => {
    setIsLoading(true);
    const getToken = localStorage.getItem("@agenda");
    const token = getToken ? JSON.parse(getToken) : null;
    api
      .get("/users", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setContacts(res.data[0].contacts);
        delete res.data[0].contacts;
        setUser(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  };

  const createContact = (data: DataRequestContact) => {
    const getToken = localStorage.getItem("@agenda");
    const token = getToken ? JSON.parse(getToken) : null;

    api
      .post("/contact", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        delete res.data.user;
        setContacts([...contacts, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const disconnectUser = () => {
    localStorage.removeItem("@agenda");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        createContact,
        contacts,
        user,
        disconnectUser,
        isLoading,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
