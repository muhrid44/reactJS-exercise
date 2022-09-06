import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Nav from "../LandingPage/Nav";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TocIcon from "@mui/icons-material/Toc";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockResetIcon from "@mui/icons-material/LockReset";

const Dashboard = (props) => {
  const ctx = useContext(GlobalContext);
  if (!ctx.Cookies.get("token")) {
    ctx.navigate("/");
  }

  const imgParsed = ctx.Cookies.get("user");
  const imgURL = JSON.parse(imgParsed).image_url;

  return (
    <>
      <Nav />
      <aside class="flex-auto" aria-label="Sidebar">
        <div class="h-screen border border-t-0 float-left w-[300px] overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 2xl:w-screen">
        <img class="w-20 h-20 rounded-full mb-[15px] m-auto" src={imgURL} alt="avatar"></img>
          <ul class="space-y-2">
            <li>
              <Link to="/dashboard">
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <DashboardIcon fontSize="small" />
                  <span class="ml-3">Dashboard</span>
                </a>
              </Link>
            </li>
            <hr className="border-grey"></hr>
            <li>
              <Link to="/dashboard/list-job-vacancy">
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TocIcon fontSize="small" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Data Table</span>
                </a>
              </Link>
            </li>
            <hr className="border-grey"></hr>
            <li>
              <Link to="/dashboard/list-job-vacancy/form">
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <AddBoxIcon fontSize="small" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Data Form</span>
                </a>
              </Link>
            </li>
            <hr className="border-black"></hr>
            <li className="">
              <Link to="/dashboard/profile">
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <AccountCircleIcon fontSize="small" />
                  <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </a>
              </Link>
            </li>
            <hr className="border-grey"></hr>
            <li>
              <Link to="/dashboard/change-password">
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <LockResetIcon fontSize="small" />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    Change Password
                  </span>
                </a>
              </Link>
            </li>{" "}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
