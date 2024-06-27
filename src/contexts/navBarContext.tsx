import React, { createContext, useEffect, useState } from "react";

interface INavBarContextType {
    currentLink: string,
    setCurrentLink: React.Dispatch<React.SetStateAction<string>>;
}

export const NavBarContext = createContext<INavBarContextType>({currentLink: "Home", setCurrentLink: () => {}});

interface INavBarProviderProps {
    children: React.ReactNode,
}

export const NavBarProvider: React.FC<INavBarProviderProps> = ({children}) => {
    const localPage = localStorage.getItem('LorenzaCurrentLink');
    const storagePage = localPage ? JSON.parse(localPage) : "abacaxi";
    
    const [currentLink, setCurrentLink] = useState<string>(storagePage);

    useEffect(() => {
        window.localStorage.setItem('LorenzaCurrentLink', JSON.stringify(currentLink))
    }, [currentLink])
    
    return (
        <NavBarContext.Provider value={{currentLink, setCurrentLink}}>
            {children}
        </NavBarContext.Provider>
    )
}