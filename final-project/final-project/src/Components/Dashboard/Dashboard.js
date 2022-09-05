import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Nav from "../LandingPage/Nav";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const ctx = useContext(GlobalContext);
  if (!ctx.Cookies.get("token")) {
    ctx.navigate("/");
  }

  return (
    <>
      <Nav />
      <div className="flex">
        <aside class="flex-auto w-64" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
              <li>
                <a
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">
                  <Link to="/dashboard">Dashboard</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                  <Link to="/dashboard/list-job-vacancy">Data Table</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                  <Link to="/dashboard/list-job-vacancy/form">Data Form</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                  <Link to="/dashboard/profile">Profile</Link></span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                  <Link to="/dashboard/change-password">Change Password</Link>
                  </span>
                </a>
              </li>{" "}
            </ul>
          </div>
        </aside>
        <h1 className="flex-auto w-[100%] font-bold text-[2rem] text-center mt-[50px]">
        Welcome to Dashboard, unfortunately this services are under construction :( 
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
