import "./App.css";
import GlobalContext from "./context/GlobalContext";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Home from "./Components/LandingPage/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailContentPage from "./Components/LandingPage/HomeContent/DetailContentPage";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import Cookies from "js-cookie"
import DashboardContent from "./Components/Dashboard/DashboardContent";
import CreateForm from "./Components/Form/CreateForm";
import ErrorPage from "./ErrorPage";
import EditForm from "./Components/Form/EditForm";

function App() {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [id, setId] = useState(null);
  const [detailData, setDetailData] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    image_url: "",
    email: "",
    password: ""
  });
  const [userLogin, setUserLogin] = useState({
    email : "",
    password : ""
  });
  const [register, setRegister] = useState(false);
  const [passwordChange, setPasswordChange] = useState({
    current_password : "",
    new_password : "",
    new_confirm_password: ""
  });
  const [createData, setCreateData] = useState({
    title:"",
    job_description :"",
    job_qualification : "",
    job_type : "" ,
    job_tenure: "",
    job_status : null,
    company_name : "",
    company_image_url : "",
    company_city : "",
    salary_min : null,
    salary_max : null

  });
  const [dataIsFetched, setDataIsFetched] = useState(false);


  useEffect(() => {
    const callData = async () => {
      const res = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      setData([...res.data.data]);
    };
    callData();
  }, [dataIsFetched]);


  return (
    <>
      <GlobalContext.Provider
        value={{
          data: data,
          id: id,
          setId: setId,
          detailData:detailData,
          setDetailData:setDetailData,
          userData:userData,
          setUserData:setUserData,
          navigate: useNavigate(),
          Cookies:Cookies,
          register:register,
          setRegister:setRegister,
          userLogin:userLogin,
          setUserLogin:setUserLogin,
          dataFiltered:dataFiltered,
          setDataFiltered:setDataFiltered,
          inputSearch:inputSearch,
          setInputSearch:setInputSearch,
          passwordChange:passwordChange,
          setPasswordChange:setPasswordChange,
          createData:createData,
          setCreateData:setCreateData,
          dataIsFetched:dataIsFetched,
          setDataIsFetched:setDataIsFetched  
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/dashboard/:section" element={<DashboardContent />} />
          <Route path="/dashboard/job-list/form" element={<DashboardContent />} />
          <Route path="/details/:id" element={<DetailContentPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list-job-vacancy/:id" element={<EditForm />} />
          <Route path="/dashboard/list-job-vacancy/form" element={<CreateForm />} />
          <Route path="/404" element={<ErrorPage />} />


        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
