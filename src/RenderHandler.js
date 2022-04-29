import { useEffect, useState } from "react";
import React from "react";
import App from "./App.js";
import MainMenu from "./MainMenu.js";
import NewsFeed from "./NewsFeed.js";
import Events from "./Events.js";
import Profile from "./Profile.js";
import MenuDown from "./images/menuDown.png"
import MenuUp from "./images/menuUp.png"

export const StateContext = React.createContext();

function RenderHandler()
{
    const[renderState,setRenderState] = useState(['LOGIN','LOGIN']);
    const[menuIsRendered, setMenu] = useState(false)
    const body = document.querySelector('body');

    useEffect(()=>
    {
        if(renderState[0] === 'LOGIN')
        {
            body.style.overflow = 'hidden'
        }
        else
        {
            body.style.overflow = 'visible'
        }
    },[renderState])
    const handlMenuRender = () => {
        setMenu(prevmenuIsRendered => !prevmenuIsRendered)
    }

    return(
        <div> 
            <StateContext.Provider value={[renderState, setRenderState]}>
            {renderState[0] === 'LOGIN'&& <App></App> }
            { /*{renderState[0] === 'MENU' && <div className='MenuHeader'><h1>SPORTS EVENT HANDLER</h1></div>} */ }


            {(renderState[0] === 'MENU' && !menuIsRendered) &&
            <div className='MenuHeader'>
                <img onClick={handlMenuRender} src = {MenuDown} className='MenuIcon' ></img> 
                <h1> SPORTS EVENT HANDLER</h1>
            </div>}
            {(renderState[0] === 'MENU' && menuIsRendered) &&
            <div className='MenuHeader'>
                <img onClick={handlMenuRender} src = {MenuUp} className='MenuIcon' ></img>
                <h1> SPORTS EVENT HANDLER</h1>
            </div>}
            { /*
            {(renderState[0] === 'MENU' && !menuIsRendered) && <img onClick={handlMenuRender} src = {MenuDown} className='MenuIcon' ></img>}
            {(renderState[0] === 'MENU' && menuIsRendered) && <img onClick={handlMenuRender} src = {MenuUp} className='MenuIcon' ></img>}
            */ }

            {(renderState[0] === 'MENU' && menuIsRendered) && <MainMenu></MainMenu>}
            {renderState[1] === 'MAIN' && <NewsFeed></NewsFeed>}
            {renderState[1] === 'EVENTS' && <Events></Events>}
            {renderState[1] === 'PROFILE' && <Profile></Profile>}
            </StateContext.Provider>
        </div>
    )
}

export default RenderHandler;