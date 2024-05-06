import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';


function LoginPage(){

    const [loginView, setLoginView] = useState(true);


    return(
        <div className="login-page">
            {
                loginView ? 
                <div>
                <Login/>
                    <p className='smalltext default'
                    onClick={e=>{
                        setLoginView(false)
                    }}>Create a new account</p>
                </div>
                :
                <div>
                <SignUp/>
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