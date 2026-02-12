import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
