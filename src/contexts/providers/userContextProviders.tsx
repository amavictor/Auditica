import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "../contexts";
import { useGetRequest } from "../../custom-hooks/get-request";
import { getCurrentUSer } from "../../Apicalls/User/users";

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  // const storedUser = localStorage.getItem("auditicaUser");
  // const initialUser : any = storedUser ? JSON.parse(storedUser) : null;
  const [user, setUser] = useState<any>(null);

  const token = localStorage.getItem("auditicaToken");
  const {
    data,
    refetch: fetchUser,
  } = useGetRequest("User", () => getCurrentUSer(), {
    enabled: false,
  });

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [fetchUser, token]);

  useEffect(() => {
    if (data) {
      setUser(data?.data);
      localStorage.setItem("auditicaUser", JSON.stringify(user));
    }
  }, [data, user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
