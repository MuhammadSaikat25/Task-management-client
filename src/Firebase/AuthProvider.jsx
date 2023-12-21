import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";

export const AuthContext = createContext(null);
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
