import React, { createContext, useState } from "react";
export const GlobalContext = createContext();      //creat context
export const Globalprovider = ({children})=>{
    const [globalData, setglobalData] = useState(null);
    return(
    <GlobalContext.Provider value={{globalData, setglobalData}}>
        {children}
    </GlobalContext.Provider>)
}
    



