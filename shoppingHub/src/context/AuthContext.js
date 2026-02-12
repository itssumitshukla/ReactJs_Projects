import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
