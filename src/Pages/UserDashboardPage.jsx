import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDashboard from "./UserDashboard";
import Dashboard from './Dashboard'

const UserDashboardPage = () => {
  const [hasGroups, setHasGroups] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN));
  const userId = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERID));
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    const checkGroups = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/groups/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(res.data) && res.data.length > 0) {
          setHasGroups(true);
        } else {
          setHasGroups(false);
        }
      } catch (error) {
        console.error("Error checking user groups:", error);
        setHasGroups(false);
      } finally {
        setLoading(false);
      }
    };

    if (userId && token) {
      checkGroups();
    } else {
      setLoading(false);
    }
  }, [userId, token]);

  if (loading) return <p>Loading...</p>;

  return hasGroups ? <UserDashboard /> : <Dashboard />;
};

export default UserDashboardPage;
