import logo from './logo.svg';
import './App.css';
import LoginBody from './LoginBody';
import sportOne from './images/sport04.png'
import sportTwo from './images/sport03.png'

function App() {
  return (
      <table>
        <tr>
          <td className='login_intro'>
          <div>
            <h1 className ='login_title'>Welcome Student!</h1>
            <br></br>
            <p className='login_intro_text'> This is the university's platform for you to register sports events and check your status regarding them!Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample </p>
          </div>
          <div>
            <img src={sportOne} width = "60%" className = 'sport_one_img'></img>
          </div>
          </td>
          <td>
            <div>
              <img src={sportTwo} width = "15%" className = 'sport_two_img'></img>
            </div>
          <div className ='login_widget'>
          <LoginBody></LoginBody>
        </div>
          </td>
        </tr>
      </table>
  );
}

export default App;
