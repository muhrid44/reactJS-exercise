import axios from "axios";
import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

const PasswordChange = (props) => {
  const [charIsValid, setCharIsValid] = useState(true);
  const [matchIsValid, setMatchIsValid] = useState(true);

  const ctx = useContext(GlobalContext);

  const emailParse = ctx.Cookies.get("user");
  const email = JSON.parse(emailParse).email;

  const minChar = (
    <>
      <span className="text-sm italic text-[red]">(min 8 char!)</span>
    </>
  );
  const passwordMatch = (
    <>
      <span className="text-sm italic text-[red]">
        (password doesn't match!)
      </span>
    </>
  );

  const currentPasswordHandler = (event) => {
    ctx.setPasswordChange((prevValue) => {
      return { ...prevValue, current_password: event.target.value };
    });
  };

  const newPasswordHandler = (event) => {
    ctx.setPasswordChange((prevValue) => {
      return { ...prevValue, new_password: event.target.value };
    });
  };

  const confirmPasswordHandler = (event) => {
    ctx.setPasswordChange((prevValue) => {
      return { ...prevValue, new_confirm_password: event.target.value };
    });
  };

  const { current_password, new_password, new_confirm_password } =
    ctx.passwordChange;

  const submitHandler = (event) => {
    event.preventDefault();
    if (ctx.passwordChange.new_password.length < 8) {
      setCharIsValid(false);
    } else {
      setCharIsValid(true);
    }
    if (
      ctx.passwordChange.new_confirm_password !==
      ctx.passwordChange.new_password
    ) {
      setMatchIsValid(false);
    } else {
      setMatchIsValid(true);
    }

    if (charIsValid && matchIsValid) {
      const changePassword = async () => {
        const res = await axios.post(
          "https://dev-example.sanbercloud.com/api/change-password",
          { current_password, new_password, new_confirm_password },
          { headers: { Authorization: "Bearer " + ctx.Cookies.get("token") } }
        );
        ctx.Cookies.remove("token");
        ctx.navigate("/login");
        ctx.setPasswordChange({
            current_password: "",
            new_password: "",
            new_confirm_password: ""
        })
      };
      changePassword();
    }
  };

  return (
    <div className="w-[50%] m-auto text-left pt-[50px] 2xl:w-screen text-center 1xl:w-screen text-center">
      <h1 className="text-[1.5rem] font-bold mb-[20px]">Password Change</h1>
      <form className="text-center">
        <label
          for="email"
          class="mt-[20px] block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Your Email
        </label>
        <input
          value={email}
          disabled
          type="text"
          id="email"
          class="w-[50%] italic p-2 text-gray-500 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          for="passwordCurrent"
          class="mt-[20px] block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Current Password
        </label>
        <input
          onChange={currentPasswordHandler}
          value={ctx.passwordChange.current_password}
          type="password"
          id="passwordCurrent"
          class="w-[50%] p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          for="newPassword"
          class="mt-[20px] block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          New Password {!charIsValid && minChar}
        </label>
        <input
          onChange={newPasswordHandler}
          value={ctx.passwordChange.new_password}
          type="password"
          id="newPassword"
          class="w-[50%] p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          for="confirmPassword"
          class="mt-[20px] block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Confirm New Password {!matchIsValid && passwordMatch}
        </label>
        <input
          onChange={confirmPasswordHandler}
          value={ctx.passwordChange.new_confirm_password}
          type="password"
          id="confirmPassword"
          class="w-[50%] p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={submitHandler}
          type="submit"
          class="block m-auto mt-[50px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
