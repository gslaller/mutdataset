import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/firebaseApp";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, User } from "firebase/auth";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    const [user, setUser] = useState<User | null>(null);

    const logout = useCallback(() => {
        authContext.signOut();
    }, [user]);

    const login = useCallback((type: "google" | "github") => {
        if (!!user) return;

        let provider: GoogleAuthProvider | GithubAuthProvider = type === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();

        signInWithPopup(authContext, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    useEffect(() => {
        const unsubscribe = authContext.onAuthStateChanged((user) => {
            setUser(user)
        });

        setUser(authContext.currentUser);

        return () => unsubscribe();
    }, []);

    return { user, logout, login };
}