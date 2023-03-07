import { initializeApp, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import React from "react";
import config from "./config";

export const firebaseApp = initializeApp(config);
export const firebaseAuth = getAuth(firebaseApp);
export const AuthContext = React.createContext({} as Auth);

