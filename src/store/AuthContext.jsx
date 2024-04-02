import { createContext, useState } from "react";

export const authContext = createContext();

function AuthContext({children}) {
    const [user, setUser] = useState('');

    return(
        <authContext.Provider value={{user, setUser}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext;