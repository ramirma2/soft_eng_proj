import React,{useState} from "react"
import sample_providers from '../data/sample_providers'
import ProvidersList from "./ProvidersList"
import { useNavigate } from "react-router-dom";


function ProviderLookupPage({setCurrProvider, user}){

    const [providerType, setProviderType] = useState("")
    const [providerName, setProviderName] = useState("")
    const [location, setLocation] = useState("")
    const [insurance, setInsurance] = useState("")
    const [providers, setProviders] = useState([])

    const history = useNavigate()


    const findProvider =  () => {
        const allProviders = sample_providers;
        
        let myProviders = allProviders.filter((provider)=>{
                
               return  ((provider.provider_name == providerName || provider.practice_type.includes(providerType)) && 
               (provider.location.street_address.replace(/\s/g, '').toLowerCase() === location.replace(/\s/g, '').toLowerCase() || provider.location.city.toLowerCase()=== location.replace(/\s/g, '').toLowerCase() || provider.location.state.toLowerCase() == location.replace(/\s/g, '').toLowerCase() || provider.location.zip === location)
        )});
        if(insurance !== ''){
            return myProviders.filter((provider)=> provider.insurance.includes(insurance))
        }
        return myProviders;

    }

    const getProviders = () =>{
        const myProviders = findProvider()
        setProviders(myProviders)
    }

    const onSelectProvider = (provider) =>{
        setCurrProvider(provider)
        debugger
        history("/schedule-appointment")
    }

    return(
        <div className="provider-search">
            <form>
            <fieldset>
                <legend>Search Provider by Type</legend>
                <label> Provider Type: </label>
                <input type="text" value={providerType} placeholder="dentist, dermatologist, ..."
                    onChange={e=> setProviderType(e.target.value)} />
            </fieldset>
            <fieldset>
                <legend>Search Provider by Name</legend>
                <label> Provider Name: </label>
                <input type="text" value={providerName}
                    onChange={e=> setProviderName(e.target.value)} />
            </fieldset>
            <fieldset>
                <label> Location: </label>
                <input type="text" value={location} placeholder="Address, City or Zip code"
                    onChange={e=> setLocation(e.target.value)} required />
            </fieldset>
            <fieldset>
                <label> Insurance: </label>
                <input type="text" value={insurance} placeholder="leave blank if you will be paying for yourself "
                    onChange={e=> setInsurance(e.target.value)} />
            </fieldset>

            <button onClick={ e => {
                e.preventDefault()
                getProviders();
            }}
                > Search Provider </button>
            </form>
            
            <ProvidersList providers={providers}
                            onSelectProvider={onSelectProvider}/>
        </div>
    )
};

export default ProviderLookupPage;