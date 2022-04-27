import logo from './logo.svg';
import './App.css';
import LoginBody from './LoginBody';
import sportOne from './images/sport04.png'
import sportTwo from './images/sport03.png'
import { useContext } from 'react';
import { StateContext } from './RenderHandler';
import Register from './Register'

function App() {

  const [renderState, setRenderState] = useContext(StateContext)

  return (
      <table className='LoginTable'>
        <tr>
          <td>
            <div className ='login_widget'>
              {renderState[1] === 'LOGIN' && <LoginBody />}
              {renderState[1] === 'REGISTER' && <Register />}
            </div>
          </td>
        </tr>
      </table>
  );
}

export default App;
