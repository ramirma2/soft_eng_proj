import React, {useState} from 'react';


function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(


                <form>
                    <fieldset>
                    <label>Username:</label>
                    <input type="text" value={username}
                        onChange={e=> setUsername(e.target.value)}/>
                    <label>Password:</label>
                    <input type="password" value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                    <button
                        onClick={e=>{
                            e.preventDefault();
                        }}>Login</button>
                    </fieldset> 
                
                </form>

    )

}

export default Login;