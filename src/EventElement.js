import './App.css';
import {useState} from 'react';

function EventElement(props)
{

    const[details, setDetails] = useState(false);

    const handleDetails = () =>{
        setDetails(prevdetails => !prevdetails)
    }

    return(
        <div className= "eventElementBody">
            <table>
                <tr>
                    <td className="eventElementText">
                            <h3>
                                {props.title}
                            </h3>
                            {details && <p>{props.text}</p>}
                            {details && <button className='login_button'>Sign Up</button>}
                        </td>
                    <td className="details_container">
                        <button className='details_button' onClick={handleDetails}>Details</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default EventElement;