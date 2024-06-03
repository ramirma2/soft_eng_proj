import React from 'react';
import PatientMainInfo from './PatientMainInfo';


function PatientIntakeForm(user, userDetails, onUpdateUserDetails){
    return(
        <div className='patient-forms'>
            <PatientMainInfo 
                    user={user}
                    userDetails={userDetails}
                    onUpdateUserDetails={onUpdateUserDetails}/>
        </div>
    )
}

export default PatientIntakeForm;