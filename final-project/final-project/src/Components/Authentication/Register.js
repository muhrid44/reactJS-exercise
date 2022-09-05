import React, { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";

const Register = (props) => {
  const ctx = useContext(GlobalContext);

  const nameHandler = (event) => {
    event.preventDefault();
    ctx.setUserData((prevValue) => {
      return { ...prevValue, name: event.target.value };
    });
  };
  const imgHandler = (event) => {
    event.preventDefault();
    ctx.setUserData((prevValue) => {
      return { ...prevValue, image_url: event.target.value };
    });
  };
  const emailHandler = (event) => {
    event.preventDefault();
    ctx.setUserData((prevValue) => {
      return { ...prevValue, email: event.target.value };
    });
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    ctx.setUserData((prevValue) => {
      return { ...prevValue, password: event.target.value };
    });
  };

  const { name, image_url, email, password } = ctx.userData;

  const registerSubmit = (event) => {
    event.preventDefault();

    const registerClick = async () => {
      const res = axios.post(
        "https://dev-example.sanbercloud.com/api/register",
        { name, image_url, email, password }
      );
      ctx.setUserData({
        name: "",
        image_url: "",
        email: "",
        password: "",
      });
      ctx.navigate("/");
    };
    registerClick();
  };

  return (
    <div className="w-[80%] mt-[100px] m-auto">
      <h1 className="font-bold text-[2rem] text-center mb-[50px]">
        Registration Form
      </h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              onChange={nameHandler}
              type="text"
              value={name}
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Roberto Honggo"
              required
            />
          </div>
          <div>
            <label
              for="image-url"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              onChange={imgHandler}
              type="url"
              value={image_url}
              id="image-url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="profil image url"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            onChange={emailHandler}
            type="email"
            id="email"
            value={email}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            onChange={passwordHandler}
            type="password"
            value={password}
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          onClick={registerSubmit}
          type="submit"
          class="mb-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <button
        type="button"
        class="text-white bg-black hover:bg-[grey] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default Register;
