import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState([
        {
            username: "user1",
            password: "1234"
        },
        {
            username: "user2",
            password: "1234"
        },
        {
            username: "user3",
            password: "1234"
        },
        {
            username: "user4",
            password: "1234"
        },
        {
            username: "user5",
            password: "1234"
        },
    ]);
    const [isLogin, setIsLogin] = useState(false);


    return (
        <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>)
}

export function useAuthContext() {
    return useContext(AuthContext);
}
