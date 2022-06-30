import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar /> <Outlet />
    </>
  );
};

export default Dashboard;
