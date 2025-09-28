import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { authApi, tokenStore } from "../utils/api.js";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const u = await authApi.me();
      setUser(u);
    } catch {
      setUser(null);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = async (email, password) => {
    const { token, ...u } = await authApi.login(email, password);
    tokenStore.set(token);
    setUser(u);
  };

  const register = async (email, password, name) => {
    const { token, ...u } = await authApi.register(email, password, name);
    tokenStore.set(token);
    setUser(u);
  };

  const logout = async () => {
    tokenStore.clear();
    await authApi.logout();
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, ready, refresh, login, register, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
