
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
import UserDashboard from './Pages/UserDashboard.jsx'
import MyGroup from './Pages/MyGroup.jsx'
import Profile from './Components/Profile/Profile.jsx'
import AdminCircleStartVacationDashboard from './Pages/AdminCircleStartVacationDashboard.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'
import AdminRequestDashboard from './Components/AdminFolder/AdminRequestDashboard.jsx'
import AdminContributionDashboard from './Components/AdminFolder/AdminContributionDashboard.jsx'
import AdminMemberDashboard from './Components/AdminFolder/AdminMemberDashboard.jsx'
import GroupCreated from './Pages/GroupCreated.jsx'
import RequestJoinGroup from './Pages/RequestJoinGroup.jsx'
import RequestApproved from './Pages/RequestApproved.jsx'
import MyContribution from './Components/MyContribution.jsx'
import WomenDashboard from './Pages/WomenDashboard.jsx'
import WomenMembers from './Components/WomenMembers.jsx'
import WomenContribution from './Components/WomenContribution.jsx'
import Obele from './Pages/Obele.jsx'
import ObeleMembers from './Components/ObeleMembers.jsx'
import ObeleContribution from './Components/ObeleContribution.jsx'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<RouterError />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotcheckemail" element={<ForgotCheckEmail />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/useremptystate" element={<UserEmptyState />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/creategroup" element={<Create_group />} />
        <Route path="/mygroup" element={<MyGroup />} />

        <Route path="/profile" element={<Profile />} />
        <Route path='/admincirclestartvacationdashboard' element={<AdminCircleStartVacationDashboard />} />
        <Route path='/admindashboard' element={<AdminDashboard />} >
          <Route path='' element={<AdminMemberDashboard />} />
          <Route path='admin_contribution' element={<AdminContributionDashboard />} />
          <Route path='admin_request' element={<AdminRequestDashboard />} />
          </Route>
        <Route path='/group_created' element={<GroupCreated />} />
        <Route path='/requestjoingroup' element={<RequestJoinGroup />} />
        <Route path='/requestapproved' element={<RequestApproved />} />
        <Route path='/mycontribution' element={<MyContribution />} /> 
        <Route path='/womendashboard' element={<WomenDashboard/>} >
          <Route path='' element={<WomenMembers />} />
          <Route path='women_contribution' element={<WomenContribution />} />
        </Route>
        <Route path='/obele' element={<Obele/>} >
          <Route path='' element={<ObeleMembers />} />
          <Route path='obele_contribution' element={<ObeleContribution />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
