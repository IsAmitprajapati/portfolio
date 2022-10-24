import React, { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";
const ThemeModecontext = createContext(null)

function ThemeMode(props) {
    const [dark, setDark] = useToggle(true)

    if (dark) {
        //background
        document.documentElement.style.setProperty('--bodyBackground', '#161a1d');
        document.documentElement.style.setProperty('--headerBackground', '#0c0f0a');
        document.documentElement.style.setProperty('--navBarBackground', '#0c0f0a');

        //text color
        document.documentElement.style.setProperty('--logoColor', '#ff0000');
        document.documentElement.style.setProperty('--navigationColor', '#ffffff');
        document.documentElement.style.setProperty('--mobileMenuBtn', '#ffffff');
        document.documentElement.style.setProperty('--bodyText', '#ffffff');

        //shadow
        document.documentElement.style.setProperty('--textShadow', '1px 1px 3px rgba(0,0,0,0.5)');


    }
    else {
        //background
        document.documentElement.style.setProperty('--bodyBackground', '#ffffff');
        document.documentElement.style.setProperty('--headerBackground', '#ffffff');
        document.documentElement.style.setProperty('--navBarBackground', '#ffffff');

        //text color
        document.documentElement.style.setProperty('--logoColor', '#ff0000');
        document.documentElement.style.setProperty('--navigationColor', '#000000');
        document.documentElement.style.setProperty('--mobileMenuBtn', '#000000');
        document.documentElement.style.setProperty('--bodyText', '#000000');


        //shadow
        document.documentElement.style.setProperty('--textShadow', '1px 1px 3px rgba(0,0,0,0.1)');

    }
    return (
        <>
            <ThemeModecontext.Provider value={{ dark, setDark }}>
                {props.children}
            </ThemeModecontext.Provider>
        </>

    )
}
export { ThemeMode, ThemeModecontext }
