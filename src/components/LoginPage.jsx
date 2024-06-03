import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';


function LoginPage({setUser, setUserDetails}){

    const [loginView, setLoginView] = useState(true);


    return(
        <div className="login-page">
            {
                loginView ? 
                <div>
                <Login setUser={setUser}
                        setUserDetails={setUserDetails}/>
                    <p className='smalltext default'
                    onClick={e=>{
                        setLoginView(false)
                    }}>Create a new account</p>
                </div>
                :
                <div>
                <SignUp setUser={setUser}/>
                    <p className='smalltext default'
                    onClick={e=>{
                        setLoginView(true)
                    }}>Login with an existing account</p>
                </div>
            }

        </div>
    )

}

export default LoginPage;