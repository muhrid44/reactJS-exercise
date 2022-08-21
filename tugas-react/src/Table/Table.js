import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const callData = async () => {
      const res = await axios(
        "http://backendexample.sanbercloud.com/api/student-scores"
      );
      setData([...res.data]);
    };
    callData();
  }, []);

  const dataEmpty = <h1 className="text-center">Cannot found anything here :(</h1>

  const dataFinal = data.map((result) => {
    let indexScore = undefined;
    if (result.score < 80 && result.score >= 70) {
      indexScore = <td>B</td>;
    }
    if (result.score < 70 && result.score >= 60) {
      indexScore = <td>C</td>;
    }
    if (result.score < 60 && result.score >= 50) {
      indexScore = <td>D</td>;
    }
    if (result.score < 50) {
      indexScore = <td>E</td>;
    }

    let num = data.indexOf(result) + 1;

    return (
      <>
        <tr className="border-slate-500 border-solid border-t-[1px]">
          <td className="text-center pr-[150px] pl-[15px]">{num}</td>
          <td>{result.name}</td>
          <td>{result.course}</td>
          <td>{result.score}</td>
          {result.score >= 80 ? <td>A</td> : indexScore}
        </tr>
      </>
    );
  });
  return (
    <div className="text-left rounded-md border-solid border-[1px] border-slate-500 max-w-full">
      <table className=" text-left table-fixed border-collapse ">
        <thead className="bg-green-300">
          <tr>
            <th className="text-center pr-[150px] pl-[15px]">NO</th>
            <th className="pr-[150px]">NAMA</th>
            <th className="pr-[150px]">MATA KULIAH</th>
            <th className="pr-[150px]">NILAI</th>
            <th className="pr-[150px]">INDEX NILAI</th>
          </tr>
        </thead>
        <tbody>{data.length !== 0 && dataFinal}</tbody>
      </table>
      {data.length === 0 && dataEmpty}
    </div>
  );
};

export default Table;
