import "./App.css";
import GlobalContext from "./context/GlobalContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/LandingPage/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailContentPage from "./Components/LandingPage/HomeContent/DetailContentPage";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import Cookies from "js-cookie"
import Dashboard from "./Components/Dashboard/Dashboard";

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
  })
  const [register, setRegister] = useState(false);
  
  useEffect(() => {
    const callData = async () => {
      const res = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      setData([...res.data.data]);
    };
    callData();
  }, []);


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
          setInputSearch:setInputSearch
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details/:id" element={<DetailContentPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
