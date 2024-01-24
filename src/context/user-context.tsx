import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface User {
  email: string;
  username: string;
  password: string;
  isLogged: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check localStorage for a user on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundedUser = storedUsers.find(
      (user: User) => user.isLogged === true
    );
    if (foundedUser) {
      setUser(foundedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  return useContext(UserContext);
};
