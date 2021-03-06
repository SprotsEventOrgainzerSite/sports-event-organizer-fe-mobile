import { useContext } from 'react';
import './App.css';
import runningIcon from './images/runningIcon.png'
import { StateContext } from './RenderHandler';
import MenuUp from "./images/menuUp.png"

function MainMenu()
{
    const[renderState,setRenderState] = useContext(StateContext)

    const handleLogout = () =>{
        setRenderState(['LOGIN', 'LOGIN'])
    }

    const handleEvents = () =>{
        setRenderState(['MENU','EVENTS'])
    }

    const handleNewsfeed = () =>{
        setRenderState(['MENU','MAIN'])
    }

    const handleProfile = () =>{
        setRenderState(['MENU', 'PROFILE'])
    }

    return(
        <div>
            <div className='MenuBar'>
            <table>
                    <tr>
                        <td ><div className='MainMenuItem' onClick={handleNewsfeed}>Newsfeed</div></td>
                    </tr>
                    <tr>
                        <td ><div className='MainMenuItem' onClick={handleEvents}>Events</div></td>
                    </tr>
                    <tr>
                        <td ><div className='MainMenuItem' onClick={handleProfile}>Profile</div></td>
                    </tr>
                    <tr>
                        <td ><div className='MainMenuItem' onClick={handleLogout}>Logout</div></td>
                    </tr> 
                </table>
                
            </div>
            {/*
            <div>
              <img src={runningIcon} width = "13%" className = 'running_img'></img>
            </div>
            */}
        </div>
    )
}

export default MainMenu;