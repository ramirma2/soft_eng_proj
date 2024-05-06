import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function SignUp(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        alert(`Account successfully created! Let's start with your intake form, you can always save it and come back later to finish or edit.`)
        history("/patient-intake");
    }

    return(


                <form>
                    <fieldset>
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
                        onClick={
                            submitHandler
                        }>Create an Account</button>
                    </fieldset> 
                
                </form>

    )

}

export default SignUp;