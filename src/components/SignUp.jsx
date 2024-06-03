import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp({setUser, setUserDetails}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useNavigate();

    const handleSubmit = async () => {
        const details = {new_user:true, username, password}

        try{
            const url = 'http://127.0.0.1:8000/signup'
            const response = await axios.post(url, details);
            if(response.status == 200){
                setUser(response.data.username)
                alert ("User created!, You can start completing your profile. You can always save it and come back to finish it or edit it")
                history('/patient-intake')
            }else {
                alert ("There was a problem adding this user")
            }
        }catch(error){
            console.log('Error adding new user')
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
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword}
                        onChange={e=>setConfirmPassword(e.target.value)}/>
                    <button
                        onClick={ e=>{
                            e.preventDefault()
                            handleSubmit()

                        }
                        }>Create an Account</button>

                
                </form>

    )

}

export default SignUp;