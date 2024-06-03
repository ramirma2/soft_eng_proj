import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function ProviderSchedule ({user, currProvider, userDetails}) {

    const [apptDate, setApptDate] = useState("")
    const [apptTime, setApptTime] = useState("")
    const [oneDay, setOneDay] = useState(false)
    const [oneHour, setOneHour]= useState(false)
    const [halfHour, setHalfHour] = useState(false)

    const history = useNavigate()

    const handleSubmit = async () => {
        const reminders ={email:userDetails.email, 
                        "24":{send: oneDay, sent:false},
                        "1": {send: oneHour, sent:false},
                        "0.5":{send:halfHour, sent:false}
        }
        const details = {date_time: apptDate+apptTime, provider: currProvider.provider_name, address: `${currProvider.location.street_address}, ${currProvider.location.city}, ${currProvider.location.state}, ${currProvider.location.zip}`, reminders}

        try{
            const url = `localhost:8000/${user}/appointments`;
            const response = await axios.post(url, details);
            if(response.status === 200){              
                alert ("Appointment scheduled!")
                history("/")
            }else {
                alert ("There was a scheduling your appointment")
            }
        }catch(error){
            console.log('Error scheduling appointment')
        }
    }


    return(
        <div className="provider-sch">

        <h2>Schedule an appointment with {currProvider.provider_name}</h2>
        <form>
            <label>Date:</label>
            <input type="date" value={apptDate} 
            onChange={e=> setApptDate(e.target.value)} />
            <label>Time:</label>
            <input type="time" value={apptTime} 
            onChange={e=> setApptTime(e.target.value)} />

            <fieldset>
                <legend>Reminders: </legend>
                <div className='c-checkbox'>
                <label className="checkbox-label">
                    One Day Before Appointment
                </label>
                    <input
                        type="checkbox"
                        name={"oneDay"}
                        checked={oneDay}
                        onChange={()=> setOneDay(!oneDay)}/>
                </div>
                <div className='c-checkbox'>
                <label className="checkbox-label">
                    One Hour Before Appointment
                </label>
                    <input
                        type="checkbox"
                        name={"oneHour"}
                        checked={oneHour}
                        onChange={()=> setOneHour(!oneHour)}/>

                </div>
                <div className='c-checkbox'>
                <label className="checkbox-label">
                    30 Minutes Before Appointment
                </label>
                    <input
                        type="checkbox"
                        name={"halfHour"}
                        checked={halfHour}
                        onChange={()=> setHalfHour(!halfHour)}/>

                </div>
            </fieldset>
            
            <button onClick={ e => {
                e.preventDefault()
                handleSubmit();
            }}> Schedule Appointment </button>
        </form>
        </div>
    )

}

export default ProviderSchedule;