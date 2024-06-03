import React from "react";
import PatientIntakeForm from './PatientIntakeForm';



function PatientIntakePage({user, userDetails, setUserDetails}){



    const onUpdateUserDetails = (details) =>{
        setUserDetails(details)
        alert ("Profile saved")
    }

    return(
        <div>
            <section>The information below will be kept and shared exclusively with your provider(s). Your provider may have additional paperwork for you to complete regarding the reason for your visit and that will be provided on your first visit.</section>
            <PatientIntakeForm user={user} onUpdateUserDetails={onUpdateUserDetails}/>
        </div>
    )
}

export default PatientIntakePage;