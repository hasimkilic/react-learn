import { useState,createContext } from "react";

export const Context = createContext();

const Provider = ({children}) =>{
    const [theme,setTheme] = useState("light");
    const [language,setLanguage] = useState("tr");
  
    const data = {
      theme,
      setTheme,
      language,
      setLanguage
    }
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export default Provider

