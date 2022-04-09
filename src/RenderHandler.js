import { useState } from "react";
import App from "./App.js"


function RenderHandler()
{
    const[isLoggedIn,setLogin] = useState(false);

    return(
        <div>
            {!isLoggedIn && <App></App> }
        </div>
    )
}

export default RenderHandler;