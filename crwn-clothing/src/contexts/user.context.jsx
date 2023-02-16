import { createContext, useState } from "react";

//Actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});
