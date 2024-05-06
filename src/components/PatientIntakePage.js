import React from "react";
import PatientIntakeForm from './PatientIntakeForm';

function PatientIntakePage(){
    return(
        <div>
            <section>The information below will be kept and shared exclusively with your provider(s). Your provider may have additional paperwork for you to complete regarding the reason for your visit and that will be provided on your first visit.</section>
            <PatientIntakeForm/>
        </div>
    )
}

export default PatientIntakePage;