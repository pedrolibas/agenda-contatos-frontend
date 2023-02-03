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

interface DataContact extends DataRequestContact {
  id: string;
  createdAt: Date;
}

interface DataProvider {
  userLogin: (data: DataLogin) => void;
  userRegister: (data: DataRegister) => void;
  createContact: (data: DataRequestContact) => void;
  contacts: DataContact[];
  setContacts: React.Dispatch<React.SetStateAction<DataContact[]>>;
}

export const UserContext = createContext<DataProvider>({} as DataProvider);

const UserProvider = ({ children }: IProps) => {
  const [contacts, setContacts] = useState<DataContact[]>([]);

  const naviagate = useNavigate();

  const userLogin = (data: DataLogin) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@agenda", JSON.stringify(res.data.token));
        naviagate("/dashboard");
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

  const createContact = (data: DataRequestContact) => {
    const getToken = localStorage.getItem("@agenda");
    const token = getToken ? JSON.parse(getToken) : null;

    api
      .post("/contact", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, createContact, contacts, setContacts }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
