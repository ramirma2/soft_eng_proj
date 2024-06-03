import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login({setUser, setUserDetails}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const handleSubmit = async () => {
        const details = {new_user:false, username, password}

        try{
            const url = `http://127.0.0.1:8000/login`;
            const response = await axios.post(url, details);
            if(response.status == 200){
                
                const profile = await getProfile()
                debugger
                // const quote = await getQuote()
                setUser(username)
                // setUserDetails(profile)
                // alert (quote)

                history('/')
            }else {
                alert ("There was a problem with the username or password")
            }
        }catch(error){
            console.log('Error with username and passowrd')
        }
    }

    const getProfile = async () => {

        try{
            const url = `http://127.0.0.1:8000/${username}/profile`;
            const response = await axios.get(url);
            if(response.status == 200){

                const profile = response.data.profile;
                return profile

            }else {
                alert ("There was a problem getting the user profile")
            }
        }catch(error){
            console.log('Error getting user profile')
        }
    }

    const getQuote = async () => {

        try{
            const url = `http://127.0.0.1:8000/quote`;
            const response = await axios.get(url);
            if(response.status == 200){

                const quote = response.data.quote;
                return quote

            }else {
                alert ("There was a problem getting a quote")
            }
        }catch(error){
            console.log('There was a problem getting a quote')
        }
    }
    

    return(


                <form>
                    <label>Username:</label>
                    <input type="text" value={username}
                        onChange={e=> setUsername(e.target.value)}/>
                    <label>Password:</label>
                    <input type="password" value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                    <button
                        onClick={e=>{
                            e.preventDefault();
                            handleSubmit();
                        }}>Login</button>
                
                </form>

    )

}

export default Login;