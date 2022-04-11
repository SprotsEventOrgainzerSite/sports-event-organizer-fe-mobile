import { useState } from "react";
import React from "react";
import App from "./App.js"

export const StateContext = React.createContext();

function RenderHandler()
{
    const[renderState,setRenderState] = useState(['LOGIN','LOGIN']);

    return(
        <div>
            <StateContext.Provider value={[renderState, setRenderState]}>
            {renderState[0] === 'LOGIN'&& <App></App> }
            </StateContext.Provider>
        </div>
    )
}

export default RenderHandler;