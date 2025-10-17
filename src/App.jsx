import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Auth/SignUp.jsx'
import SignIn from './Auth/SignIn.jsx'
import ForgotPassword from './Auth/ForgotPassword'
import ForgotCheckEmail from './Auth/ForgotCheckEmail'
import VerifyEmail from './Auth/VerifyEmail'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotcheckemail" element={<ForgotCheckEmail />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
      </Routes>
    </HashRouter>
  )
}

export default App
