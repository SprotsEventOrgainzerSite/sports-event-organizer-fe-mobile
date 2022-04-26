import './App.css';


function Profile()
{
    return(
        <div>
           <table className='profileComponentTable'>
               <tr>
               <td className='userProfileData'>
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
               </td>
                <td>
                <div className="achivementsBody">  
             <h2 className="achivements-title">Achivements</h2>
             <table className='achivementsTable'>
            </table>            
           </div>
           <div className="achivementsBody">  
             <h2 className="achivements-title">Events registered</h2>
             <table className='achivementsTable'>
            </table>            
           </div>
                </td>
               </tr>
           </table>
        </div>
    )
}

export default Profile;