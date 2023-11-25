import React, { useState, createContext, useEffect } from "react";
import routes from "../requestService.js"

const AppContext = createContext();


export default function AppProvider({ children }) {
    const [loggedUser, setLoggedUser] = useState(null);

    async function getLoggedUser() {
        let { ok, data: user } = await routes.logged();
        if(ok) setLoggedUser(user);
    }
    useEffect(() => {
        getLoggedUser();
    }, []);

    return <AppContext.Provider value={{loggedUser, setLoggedUser}}>
        {children}
    </AppContext.Provider>
}

export { AppContext }