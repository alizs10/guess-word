import { createContext, useState } from "react";


type AppContextType = {

    aboutVis: boolean;
    setAboutVis: (mode: boolean) => void;

    historyVis: boolean;
    setHistoryVis: (mode: boolean) => void;

    clearHistoryConfirmVis: boolean;
    setClearHistoryConfirmVis: (mode: boolean) => void;

}

const initialState: AppContextType = {
    aboutVis: false,
    setAboutVis: () => { },

    historyVis: false,
    setHistoryVis: () => { },

    clearHistoryConfirmVis: false,
    setClearHistoryConfirmVis: () => { }
}

export const AppContext = createContext<AppContextType>(initialState);

export function AppContextProvider({ children }: { children: React.ReactNode }) {

    const [aboutVis, setAboutVis] = useState(false);
    const [historyVis, setHistoryVis] = useState(false);
    const [clearHistoryConfirmVis, setClearHistoryConfirmVis] = useState(false);

    return (
        <AppContext.Provider value={{
            aboutVis, setAboutVis,
            historyVis, setHistoryVis,
            clearHistoryConfirmVis, setClearHistoryConfirmVis
        }}>
            {children}
        </AppContext.Provider>
    )
} 