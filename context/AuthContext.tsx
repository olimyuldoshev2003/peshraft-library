import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken, saveToken, removeToken } from "@/utils/token";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await getToken();
      setTokenState(storedToken);
      setLoading(false);
    };
    loadToken();
  }, []);

  const setToken = async (newToken: string | null) => {
    if (newToken) {
      await saveToken(newToken);
    } else {
      await removeToken();
    }
    setTokenState(newToken);
  };

  const logout = async () => {
    await removeToken();
    setTokenState(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
