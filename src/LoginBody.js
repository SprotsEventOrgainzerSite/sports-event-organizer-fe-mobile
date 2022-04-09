import './App.css';

function LoginBody()
{
    return(
        <div>
            <h2 className='loginBody_title'> Login or Register</h2>
            <div className='input_box'>
                <label className='label_text'> User Name                    
                    <div className='input_bar'><input className='input_element' type= "text"></input></div>
                </label>
                <label className='label_text'> Password                    
                    <div className='input_bar'><input  className='input_element' type= "text"></input></div>
                </label>
                <button className='login_button'><strong>Login</strong></button>
                <div><p>Don't have an account yet? Register!</p></div>
                <button className='login_button'><strong>Register</strong></button>
            </div>
        </div>
    )
}

export default LoginBody;