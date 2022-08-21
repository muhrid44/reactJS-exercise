import React, { useState } from "react";
import axios from "axios";
import Table6 from "./Table6";
import Form from "./Form";
import "./Tugas6.css";

const Tugas6 = (props) => {
  const [fetchStatus, setFetchStatus] = useState(true);
  const [id, setId] = useState(null);

  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();

    let { name, course, score } = input;

    if (id === null) {
      const submitData = async () => {
        const res = await axios.post(
          "https://backendexample.sanbercloud.com/api/student-scores",
          { name, course, score }
        );
        setFetchStatus(true);
     
      };
      submitData();
    } else {
      const editData = async () => {
        const resEdit = await axios.put(
          `https://backendexample.sanbercloud.com/api/student-scores/${id}`,
          { name, course, score }
        );
        setFetchStatus(true);
      };
      editData();
    }
    setId(null);
    setInput({
      name: "",
      course: "",
      score: "",
    });
  };

  const nameHandler = (event) => {
    setInput((prevInput) => {
      return { ...prevInput, name: event.target.value };
    });
  };
  const courseHandler = (event) => {
    setInput((prevInput) => {
      return { ...prevInput, course: event.target.value };
    });
  };
  const scoreHandler = (event) => {
    setInput((prevInput) => {
      return { ...prevInput, score: event.target.value };
    });
  };


  const editRequestHandler = (data) => {
   
    const editRequest = async () => {
      let id = +data.target.value;
      const editData = await axios.get(
        `https://backendexample.sanbercloud.com/api/student-scores/${id}`
      );
  
      setInput({
        name: editData.data.name,
        course: editData.data.course,
        score: editData.data.score,
      });
  
      setId(+id);
    };
  
    editRequest();
  }



  return (
    <div className="absolute top-5">
      <Table6
        fetchStatus={fetchStatus}
        setFetchStatus={setFetchStatus}
        editHandler={editRequestHandler}
      />
      <Form fetchStatus={setFetchStatus} id={id} input={input} setId={setId}
        nameHandler={nameHandler}
        courseHandler={courseHandler}
        scoreHandler={scoreHandler}
        formSubmit={formSubmit}
      />
    </div>
  );
};

export default Tugas6;
