import './App.css';
import { useContext, useRef, useState } from 'react';
import { StateContext } from './RenderHandler';
import sportFour from './images/sport04.png'

function Register()
{
    const [renderState, setRenderState] = useContext(StateContext)

    const loginRef = useRef();
    const emailRef = useRef();
    const passwdRef = useRef();
    const passwdAgainRef = useRef();

    const Submit = (e) =>
    {
         /*const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: loginRef, password: passwdRef, email: emailRef, passwordagain: passwdAgainRef})
        }
        fetch('https://sample/api/posts', requestOptions)
        .then(response => response.json())
        .then(data =>
            {
                if(data)
                {
                    setRenderState(['MENU','MAIN'])
                }
                else{
                    alert("Please choose diffrent credentials!")
                }
            });*/

            setRenderState(['MENU','MAIN'])
        e.preventDefault();
    }

    const Back = () =>
    {
        setRenderState(['LOGIN','LOGIN'])
    }

    return(
        <div>
            <h2 className='loginBody_title'> Registration</h2>
            <div className='input_box_register'>
            <img src={sportFour} className = 'login_img'></img>
                <form onSubmit={Submit}>
                <label className='label_text'> User Name                    
                    <div className='input_bar'><input className='input_element' ref={loginRef} type= "text"></input></div>
                </label>
                <label className='label_text'> Email                   
                    <div className='input_bar'><input className='input_element' ref={emailRef} type= "email"></input></div>
                </label>
                <label className='label_text'> Password                    
                    <div className='input_bar'><input  className='input_element' ref={passwdRef} type= "password"></input></div>
                </label>
                <label className='label_text'> Password again                   
                    <div className='input_bar'><input  className='input_element' ref={passwdAgainRef} type= "password"></input></div>
                </label>
                <button className='login_button'><strong>Register</strong></button>
                </form>
                <button onClick={Back} className='login_button'><strong>Back</strong></button>
            </div>
        </div>
    )
}

export default Register;