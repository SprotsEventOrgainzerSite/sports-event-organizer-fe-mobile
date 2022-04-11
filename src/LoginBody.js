import './App.css';
import { useContext, useRef, useState } from 'react';
import { StateContext } from './RenderHandler';


function LoginBody()
{
    const [renderState, setRenderState] = useContext(StateContext)
    const [credentials, setCredentials] = useState();

    const loginRef = useRef();
    const passwdRef = useRef();

    const Submit = (e) =>
    {
        e.preventDefault();
    }

    const handleRegister = () =>
    {
        setRenderState(['LOGIN', 'REGISTER']);
    }

    return(
        <div>
            <h2 className='loginBody_title'> Login or Register</h2>
            <div className='input_box'>
                <form onSubmit={Submit}>
                <label className='label_text'> User Name                    
                    <div className='input_bar'><input className='input_element' ref={loginRef} type= "text"></input></div>
                </label>
                <label className='label_text'> Password                    
                    <div className='input_bar'><input  className='input_element' ref={passwdRef} type= "password"></input></div>
                </label>
                <button className='login_button'><strong>Login</strong></button>
                </form>
                <div><p>Don't have an account yet? Register!</p></div>
                <button onClick={handleRegister} className='login_button'><strong>Register</strong></button>
            </div>
        </div>
    )
}

export default LoginBody;