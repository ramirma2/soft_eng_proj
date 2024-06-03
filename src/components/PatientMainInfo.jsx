
import React,{useState} from "react";
import axios from 'axios';


function PatientMainInfo({userDetails,onUpdateUserDetails, user}){
    const [first_name, setFirstName]= useState(userDetails.first_name);
    const [middle_name, setMiddlename] =useState(userDetails.middle_name);
    const [last_name, setLastName] =useState(userDetails.last_name);
    const [dob, setDOB]=useState(userDetails.dob);
    const [streetAddress, setStreetAddress]=useState(userDetails.streetAddress);
    const [city, setCity]=useState(userDetails.city);
    const [stateName, setStateName]=useState(userDetails.stateName);
    const [zip, setZip]=useState(userDetails.zip);
    const [insuranceName, setInsuranceName]=useState(userDetails.insuranceName);
    const [policyHolderName, setPolicyHolderName]=useState(userDetails.policyHolderName);
    const [policyHolderDOB, setPolicyHolderDOB]=useState(userDetails.setPolicyHolderDOB);
    const [policyNumber, setPolicyNumber]=useState(userDetails.policyNumber);
    const [primaryCare, setPrimaryCare]=useState(userDetails.primaryCare);
    const [primaryCarePhone, setPrimaryCarePhone]=useState(userDetails.primaryCarePhone);
    const [pharmacyName, setPharmacyName]=useState(userDetails.pharmacyName);
    const [pharmacyStreetAddress, setPharmacyStreetAddress]= useState(userDetails.pharmacyStreetAddress);
    const [pharmacyCity, setPharmacyCity] = useState(userDetails.setPharmacyCity);
    const [pharmacyState, setParmacyState] = useState(userDetails.pharmacyState);
    const [pharmacyZip, setPharmacyZip] = useState(userDetails.pharmacyZip);



    const handleSubmit = async () => {
        const details = {first_name, middle_name, last_name, dob, streetAddress, city, stateName, zip, insuranceName, policyHolderName, policyHolderDOB, policyNumber, primaryCare, primaryCarePhone, pharmacyName, pharmacyStreetAddress, pharmacyCity, pharmacyState, pharmacyZip}

        try{
            const url = `http://127.0.0.1:8000/${user.user}/profile`;
            const response = await axios.post(url, details);
            if(response.status === 200){
                onUpdateUserDetails(response.data)
            }else {
                alert ("There was a problem saving the user profile")
            }
        }catch(error){
            console.log('Error saving changes')
        }
    }


    return(
        <form>
            <fieldset>
                <legend>Personal Information</legend>
            <label>First Name</label>
            <input type="text" value={first_name}
            onChange={e=> setFirstName(e.target.value)}/>
            <label>Middle Name</label>
            <input type="text" value={middle_name}
            onChange={e=> setMiddlename(e.target.value)}/>
            <label>Last Name</label>
            <input type="text" value={last_name}
            onChange={e=> setLastName(e.target.value)}/>
            <label>Date of Birth</label>
            <input type="date" value={dob}
            onChange={e=> setDOB(e.target.value)}/>
            <label>Street Address</label>
            <input type="text" value={streetAddress}
            onChange={e=> setStreetAddress(e.target.value)}/>
            <label>City</label>
            <input type="text" value={city}
            onChange={e=> setCity(e.target.value)}/>
            <label>State </label>
            <input type="text" value={stateName}
            onChange={e=> setStateName(e.target.value)}/>
            <label>Zip</label>
            <input type="text" value={zip}
            onChange={e=> setZip(e.target.value)}/>
           </fieldset>

            <fieldset>
                <legend> Insurance Information </legend>
                <label>Insurance:</label>
                <input type="text" value={insuranceName}
                onChange={e=> setInsuranceName(e.target.value)}/>
                <label>Policy Holder Full Name:</label>
                <input type="text" value={policyHolderName}
                onChange={e=> setPolicyHolderName(e.target.value)}/>
                <label>Policy Holder Bate of Birth:</label>
                <input type="date" value={policyHolderDOB}
                onChange={e=> setPolicyHolderDOB(e.target.value)}/>
                <label>Policy Number:</label>
                <input type="text" value={policyNumber}
                onChange={e=> setPolicyNumber(e.target.value)}/>
            </fieldset>

            <fieldset>
                <legend> Primary Doctor and Pharmacy Information</legend>
                <label>Primary Care Physician</label>
                <input type="text" value={primaryCare}
                onChange={e=> setPrimaryCare(e.target.value)}/>
                <label>Primary Care Physician Phone number:</label>
                <input type="text" value={primaryCarePhone}
                onChange={e=> setPrimaryCarePhone(e.target.value)}/>
                <label>Pharmacy Name</label>
                <input type="text" value={pharmacyName}
                onChange={e=> setPharmacyName(e.target.value)}/>
                <label>Pharmacy Street Address</label>
                <input type="text" value={pharmacyStreetAddress}
                onChange={e=> setPharmacyStreetAddress(e.target.value)}/>
                <label>Pharmacy City</label>
                <input type="text" value={pharmacyCity}
                onChange={e=> setPharmacyCity(e.target.value)}/>
                <label>Pharmacy State</label>
                <input type="text" value={pharmacyState}
                onChange={e=> setParmacyState(e.target.value)}/>
                <label>Pharmacy Zip</label>
                <input type="text" value={pharmacyZip}
                onChange={e=> setPharmacyZip(e.target.value)}/>
                
            </fieldset>

            <button
            onClick={e=>{
                e.preventDefault();
                handleSubmit()
            }}>Save</button>

        </form>
    )


}

export default PatientMainInfo;