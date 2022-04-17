import { useState } from "react";
import React from "react";
import App from "./App.js";
import MainMenu from "./MainMenu.js";
import NewsFeed from "./NewsFeed.js";

export const StateContext = React.createContext();

function RenderHandler()
{
    const[renderState,setRenderState] = useState(['LOGIN','LOGIN']);

    return(
        <div>
            <StateContext.Provider value={[renderState, setRenderState]}>
            {renderState[0] === 'LOGIN'&& <App></App> }
            {renderState[0] === 'MENU' && <MainMenu></MainMenu>}
            {renderState[1] === 'MAIN' && <NewsFeed></NewsFeed>}
            </StateContext.Provider>
        </div>
    )
}

export default RenderHandler;