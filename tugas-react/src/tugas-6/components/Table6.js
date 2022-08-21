import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./Tugas6.css";

const Table6 = (props) => {
  const [data, setData] = useState([]);

  const editHandler = (event) => {

    
  }

  const deleteHandler = (event) => {

    let id = +event.target.value

    const deleteRequest = async () => {
      const deleteData = await axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${id}`);
      await props.setFetchStatus(true);
    }
    deleteRequest();
  }

  useEffect(() => {
    if (props.fetchStatus === true) {
      const dataFetch = async () => {
        try {
          const res = await axios.get(
            "https://backendexample.sanbercloud.com/api/student-scores"
          );
          setData([...res.data]);
          await props.setFetchStatus(false);
        } catch (error) {
          console.log("error data not found");
        }
      };
      dataFetch();
    }
  }, [props.fetchStatus, props.setFetchStatus]);

  const dataTable = data.map((result) => {
    let num = data.indexOf(result) + 1;
    return (
      <tr
        className="text-center border-b border-[#E9DAC1]"
        id={result.id}
        key={result.id}
      >
        <td className="p-2">{num}</td>
        <td className="p-2">{result.name}</td>
        <td className="p-2">{result.course}</td>
        <td className="p-2">{result.score}</td>
        <td className="p-2">
          {result.score >= 80 && "A"}
          {result.score < 80 && result.score >= 70 && "B"}
          {result.score < 70 && result.score >= 60 && "C"}
          {result.score < 60 && result.score >= 50 && "D"}
          {result.score < 50 && "E"}
        </td>
        <td className="p-2">
          <button
            value={result.id}
            className="shadow-md bg-[#E9DAC1] w-[30%] rounded-full mr-2 hover:bg-[#CDC2AE] active:bg-[#E9DAC1]"
            type="button"
            onClick={props.editHandler}
          >
            Edit
          </button>
          <button
            value={result.id}
            className="shadow-md bg-[#F675A8] w-[30%] rounded-full hover:bg-[#B9005B] active:bg-[#F675A8]"
            type="button"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <Cards>
      <table className="text-[#576F72]">
        <tr className="bg-[#E9DAC1]">
          <th className="w-screen p-2">NO</th>
          <th className="w-screen p-2">NAMA</th>
          <th className="w-screen p-2">MATA KULIAH</th>
          <th className="w-screen p-2">NILAI</th>
          <th className="w-screen p-2">INDEX NILAI</th>
          <th className="w-screen p-2">ACTION</th>
        </tr>
        {dataTable}
      </table>
    </Cards>
  );
};
export default Table6;
