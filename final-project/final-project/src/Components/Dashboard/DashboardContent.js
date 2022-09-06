import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import ListJob from "./ListJob";
import Profile from "./Profile";
import PasswordChange from "./PasswordChange";

const DasboardContent = (props) => {
  const ctx = useContext(GlobalContext);

  let { section } = useParams();

  let dashboardContent = section;

  let parsing = ctx.Cookies.get("user");
  let yourName = JSON.parse(parsing).name;

  const hour = new Date().getHours();
  let greeting = "Night"
  
  if (hour >= 6 && hour < 12){
    greeting="Morning"
  }
  if (hour > 12 && hour < 16){
    greeting="Afternoon"
  }
  if (hour >= 16 && hour < 20){
    greeting="Evening"
  }

  let defaultContent = (
    <>
      {" "}
      <h1 className="pt-[50px] font-bold text-[2rem]">Good {greeting} {yourName} !</h1>
      <h1 className="pt-[50px] font-bold text-[2rem]">Welcome to Dashboard!</h1>
      <h2 className="font-bold text-[1.5rem]">
        In this section, you will be able to create new job vacancy, view the
        table list of job vacancies, edit or remove it!
      </h2>
      <h2 className="font-bold text-[1.5rem]">
        You could also change your password!
      </h2>{" "}
    </>
  );

  return (
    <>
      <Dashboard />
      <div className="flex-auto w-[100%] h-screen text-center leading-loose">
        {dashboardContent === undefined && defaultContent}
        {dashboardContent === "list-job-vacancy" && <ListJob />}
        {dashboardContent === "profile" && <Profile />}
        {dashboardContent === "change-password" && <PasswordChange />}
      </div>
    </>
  );
};

export default DasboardContent;
