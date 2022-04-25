import './App.css';


function Profile()
{
    return(
        <div>
            <div className="profileBody">  
             <h2 className="profile-title">Profile</h2>
             <table className='profileTable'>
                 <tr>
                     <td>
                         Name:
                     </td>
                     <td className='dataColumn'>
                         Sample
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Email address:
                     </td>
                     <td className='dataColumn'>
                         Sample
                     </td>
                </tr>
                 <tr>
                     <td>
                         Birth date:
                     </td>
                     <td className='dataColumn'>
                         Sample
                     </td>
                 </tr>
            </table>            
           </div>
        </div>
    )
}

export default Profile;