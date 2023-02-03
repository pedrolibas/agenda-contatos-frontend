import { createContext, ReactNode } from "react";

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
  confirmPassword: string;
}

export interface DataRequestContact {
  name: string;
  email: string;
  telephone: string;
}

interface DataProvider {
  userLogin: (data: DataLogin) => void;
  userRegister: (data: DataRegister) => void;
  createContact: (data: DataRequestContact) => void;
}

export const UserContext = createContext<DataProvider>({} as DataProvider);

const UserProvider = ({ children }: IProps) => {
  const userLogin = (data: DataLogin) => {
    console.log(data);
  };

  const userRegister = (data: DataRegister) => {
    console.log(data);
  };

  const createContact = (data: DataRequestContact) => {
    console.log(data);
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, createContact }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
