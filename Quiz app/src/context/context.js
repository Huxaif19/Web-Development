import { useContext } from "react";
import { createContext } from "react";


export const themeContext = createContext({
    themeMode : 'light', 
    setLightTheme: () =>{},
    setDarkTheme : () =>{},
})


export const themeContextProvider = themeContext.Provider;

export default function useThemeContext(){
    useContext(themeContext);
}