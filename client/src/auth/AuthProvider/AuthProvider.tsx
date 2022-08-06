import React, { createContext, SetStateAction, useState } from "react";

interface info {
    username: string | null;
    password: string | null;
    accessToken: string | null;
    roles: number[] | null
}

interface AuthContextInterface {
    auth: info
    setAuth: React.Dispatch<SetStateAction<info>>;
}

const contextDefaultValue: AuthContextInterface = {
    auth: {
        username: null,
        password: null,
        accessToken: null,
        roles: null
    },
    setAuth: () => { }
}

export const AuthContext = createContext<AuthContextInterface>(contextDefaultValue);


interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<info>(contextDefaultValue.auth);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider