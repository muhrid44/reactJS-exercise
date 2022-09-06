import React, { useState, useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const Nav = (props) => {
  const [collapse, setCollapse] = useState(false);

  const ctx = useContext(GlobalContext);

  const homeHandler = (event) => {
    event.preventDefault();
    ctx.setDataFiltered("")
  }

  const toggleHandler = () => {
    setCollapse(!collapse);
  };

  const register = (
    <li>
      <a class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link to="/register">Register</Link>
      </a>
    </li>
  );

  const login = (
    <li>
      <a class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link to="/login">Login</Link>
      </a>
    </li>
  );

  const dashboard = (
    <li>
      <a class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link to="/dashboard">Dashboard</Link>
      </a>
    </li>
  );

  const logoutHandler = (event) => {
    event.preventDefault();
    ctx.Cookies.remove("token");
    ctx.navigate("/")
  }

  const logout = (
    <li onClick={logoutHandler}>
      <a class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        Logout
      </a>
    </li>
  );
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a onClick={homeHandler} class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-3xl font-['Proxima Nova']">
            <Link to="/">Work For Live</Link>
          </span>
        </a>
        <button
          onClick={toggleHandler}
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={collapse ? "false" : "true"}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto id=navbar-default ${
            !collapse && "hidden"
          }`}
        >
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a onClick={homeHandler} class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to="/">Home</Link>
              </a>
            </li>
            {ctx.Cookies.get("token") && dashboard}
            {ctx.Cookies.get("token") && logout}
            {!ctx.Cookies.get("token") && register}
            {!ctx.Cookies.get("token") && login}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
