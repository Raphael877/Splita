// // src/Pages/UserDashboardPage.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import UserDashboard from "./UserDashboard";
// import UserEmptyState from "./UserEmptyState";

// const UserDashboardPage = () => {
//   const [hasGroups, setHasGroups] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");
//   const userId = localStorage.getItem("userId");
//   const BaseUrl = import.meta.env.VITE_BaseUrl;

//   useEffect(() => {
//     const checkGroups = async () => {
//       try {
//         const res = await axios.get(`${BaseUrl}/users/${userId}/groups`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // If your API returns an array of groups:
//         if (Array.isArray(res.data) && res.data.length > 0) {
//           setHasGroups(true);
//         } else {
//           setHasGroups(false);
//         }
//       } catch (error) {
//         console.error("Error checking user groups:", error);
//         setHasGroups(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId && token) {
//       checkGroups();
//     } else {
//       setLoading(false);
//     }
//   }, [userId, token]);

//   if (loading) return <p>Loading...</p>;

//   return hasGroups ? <UserDashboard /> : <UserEmptyState />;
// };

// export default UserDashboardPage;
