
import React,{useState} from "react";


function PatientMainInfo(){
    const [first_name, setFirstName]= useState("");
    const [middle_name, setMiddlename] =useState("");
    const [last_name, setLastName] =useState("");
    const [dob, setDOB]=useState("");
    const [streetAddress, setStreetAddress]=useState("");
    const [city, setCity]=useState("");
    const [stateName, setStateName]=useState("");
    const [zip, setZip]=useState("");
    const [insuranceName, setInsuranceName]=useState("");
    const [policyHolderName, setPolicyHolderName]=useState("");
    const [policyHolderDOB, setPolicyHolderDOB]=useState("");
    const [policyNumber, setPolicyNumber]=useState("");
    const [primaryCare, setPrimaryCare]=useState("");
    const [primaryCarePhone, setPrimaryCarePhone]=useState("");
    const [pharmacyName, setPharmacyName]=useState("");
    const [pharmacyStreetAddress, setPharmacyStreetAddress]= useState("");
    const [pharmacyCity, setPharmacyCity] = useState("");
    const [pharmacyState, setParmacyState] = useState("");
    const [pharmacyZip, setPharmacyZip] = useState("");


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
            }}>Save</button>

        </form>
    )


}

export default PatientMainInfo;