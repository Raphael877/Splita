import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import RouterError from './Components/RouterError.jsx'
import SignUp from './Auth/SignUp.jsx'
import SignIn from './Auth/SignIn.jsx'
import ForgotPassword from './Auth/ForgotPassword'
import ForgotCheckEmail from './Auth/ForgotCheckEmail'
import VerifyEmail from './Auth/VerifyEmail'
import LandingPage from './Pages/LandingPage.jsx'
import UserEmptyState from './Pages/UserEmptyState.jsx'
import Create_group from './Auth/Create_group.jsx'


const App = () => {
  return (
    <HashRouter>
      <Routes>
        
        <Route path="*" element={<RouterError/>}/>
        <Route path="" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotcheckemail" element={<ForgotCheckEmail />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/useremptystate" element={<UserEmptyState />} />
        <Route path="/creategroup" element={<Create_group />} />

      </Routes>
    </HashRouter>
    
  )
}

export default App
