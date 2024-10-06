import { createContext, useEffect, useRef, useState } from "react";


type AppContextType = {

    aboutVis: boolean;
    setAboutVis: (mode: boolean) => void;

}

const initialState: AppContextType = {
    aboutVis: false,
    setAboutVis: () => { }
}

export const AppContext = createContext<AppContextType>(initialState);

export function AppContextProvider({ children }: { children: React.ReactNode }) {

    const [aboutVis, setAboutVis] = useState(false);

    return (
        <AppContext.Provider value={{
            aboutVis, setAboutVis
        }}>
            {children}
        </AppContext.Provider>
    )
} 