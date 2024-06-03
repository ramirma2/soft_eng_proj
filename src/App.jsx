
import './App.css'
import Navigation from './components/Navigation'
import { useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import AboutPage from './components/AboutPage'
import LoginPage from './components/LoginPage'
import ProviderLookupPage from './components/ProviderLookupPage'
import PatientIntakePage from './components/PatientIntakePage'
import ProviderSchedule from './components/ProviderSchedule'
import axios from 'axios';

function App() {

  const[user, setUser] = useState("")
  const[userDetails, setUserDetails] = useState()
  const [currProvider, setCurrProvider] = useState({})



  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Homepage 
                                      user={user}/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/login" element={<LoginPage
                                      setUser={setUser}
                                      setUserDetails={setUserDetails}/>}></Route>
            <Route path="/provider-search" element={<ProviderLookupPage
                                                    user={user}
                                                    setCurrProvider={setCurrProvider}/>}></Route>
            <Route path="/schedule-appointment" element={<ProviderSchedule
                                                    user={user}
                                                    currProvider={currProvider}
                                                    userDetails={userDetails}/>}></Route>
            <Route path="/patient-intake" element={<PatientIntakePage
                                                    user={user}
                                                    userDetails={userDetails}
                                                    setUserDetails={setUserDetails}/>}></Route>
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
