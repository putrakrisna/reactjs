import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../action";


const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <h3>Dashboard</h3>
      <h1>{`Welcome Customer, ${data.user.fullname}`}</h1>
      <p>{data.user.email}</p>
      <p>{data.user.phone}</p>
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Dashboard;
