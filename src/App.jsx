import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterError from "./Components/RouterError.jsx";
import SignUp from "./Auth/SignUp.jsx";
import SignIn from "./Auth/SignIn.jsx";
import ForgotPassword from "./Auth/ForgotPassword";
import ForgotCheckEmail from "./Auth/ForgotCheckEmail";
import VerifyEmail from "./Auth/VerifyEmail";
import LandingPage from "./Pages/LandingPage.jsx";
import UserDashboard from "./Pages/UserDashboard.jsx";
import Create_group from "./Auth/Create_group.jsx";
import MyGroup from "./Pages/MyGroup.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import AdminCircleStartVacationDashboard from "./Pages/AdminCircleStartVacationDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AdminRequestDashboard from "./Components/AdminFolder/AdminRequestDashboard.jsx";
import AdminContributionDashboard from "./Components/AdminFolder/AdminContributionDashboard.jsx";
import AdminMemberDashboard from "./Components/AdminFolder/AdminMemberDashboard.jsx";
import GroupCreated from "./Pages/GroupCreated.jsx";
import RequestJoinGroup from "./Pages/RequestJoinGroup.jsx";
import RequestApproved from "./Pages/RequestApproved.jsx";
import MyContribution from "./Components/MyContribution.jsx";
import WomenDashboard from "./Pages/WomenDashboard.jsx";
import WomenMembers from "./Components/WomenMembers.jsx";
import WomenContribution from "./Components/WomenContribution.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Obele from "./Pages/Obele.jsx";
import ObeleMembers from "./Components/ObeleMembers.jsx";
import ObeleContribution from "./Components/ObeleContribution.jsx";
import Groups from "./Pages/Groups.jsx";
import Contributions from "./Pages/Contributions.jsx";
import Join_Group from "./Pages/Join_Group.jsx";
import MyGroupDetail from "./Components/MyGroupDetail.jsx";
import Start_group from "./Pages/Start_group.jsx";
import Members from './Components/Members.jsx'
import Contribution from './Components/Contribution.jsx'
import UserDashboardPage from './Pages/UserDashboardPage.jsx';
import ProtectedRoute from "./config/ProtectedRoute.jsx";
// import UserGroupPage from './Pages/UserGroupPage.jsx';
// import UserContributionPage from './Pages/UserContributionPage.jsx';

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/start_group" element={<Start_group />} >
          <Route path="requestjoingroup" element={<RequestJoinGroup />} />
          <Route path="contribution" element={<Contribution />} />
          <Route path="" element={<Members />} />
        </Route>
        {/* <Route
          path="/dashboard"
          element={<ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>}/> */}
        <Route path="/creategroup" element={<Create_group />} />
        <Route path="/groups" element={<MyGroup />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admincirclestartvacationdashboard/:groupId?"
          element={<AdminCircleStartVacationDashboard />}
        />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AdminMemberDashboard />} />
          <Route
            path="admin_contribution"
            element={<AdminContributionDashboard />}
          />
          <Route path="admin_request" element={<AdminRequestDashboard />} />
        </Route>
        <Route path="/group_created" element={<GroupCreated />} />
        
        {/* <Route path="/userdashboardpage" element={<UserDashboardPage />} />
        <Route path="/usergrouppage" element={<UserGroupPage />} />
        <Route path="/usercontributionpage" element={<UserContributionPage />} /> */}
        <Route path="/mygroupdetail" element={<MyGroupDetail />} />
        <Route path="/requestapproved" element={<RequestApproved />} />
        <Route path="/mycontribution" element={<MyContribution />} />
        <Route path="/womendashboard/:groupId?" element={<WomenDashboard />}>
          <Route path="" element={<WomenMembers />} />
          <Route path="women_contribution" element={<WomenContribution />} />
        </Route>

        <Route path="/obele" element={<Obele />}>
          <Route path="" element={<ObeleMembers />} />
          <Route path="obele_contribution" element={<ObeleContribution />} />
        </Route>
        <Route
          path="/userdashboardpage"
          element={<ProtectedRoute>
                    <UserDashboardPage />
                  </ProtectedRoute>}/>
        <Route path="/join_group/:groupid?/:invite?" element={<Join_Group />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </HashRouter>
  );
};

export default App;
