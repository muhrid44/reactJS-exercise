import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios"

const Login = (props) => {
  const ctx = useContext(GlobalContext);

  const emailHandler = (event) => {
    event.preventDefault();
    ctx.setUserLogin((prevValue) => {
      return { ...prevValue, email: event.target.value };
    });
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    ctx.setUserLogin((prevValue) => {
      return { ...prevValue, password: event.target.value };
    });
  };

  const {email, password} = ctx.userLogin;

  const loginHandler = (event) => {
    event.preventDefault();
    const login = async () => {
        const res = await axios.post("https://dev-example.sanbercloud.com/api/login", {email, password});
        let {token} = res.data
        ctx.Cookies.set('token', token)
        ctx.navigate("/")
    }
    login();

  }

  return (
    <div className="w-[20%] mt-[150px] m-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in
          </h3>
          <form class="space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                onChange={emailHandler}
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                onChange={passwordHandler}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
            onClick={loginHandler}
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a class="text-blue-700 hover:underline dark:text-blue-500">
                <Link to="/register">Create account</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
