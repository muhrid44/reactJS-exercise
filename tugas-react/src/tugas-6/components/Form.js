import React, { useState } from "react";
import "./Tugas6.css";
import Cards from "./Cards";

const Form = (props) => {
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });
 

  return (
    <Cards>
      <form onSubmit={props.formSubmit}>
        <label className="block text-[#576F72]" htmlFor="name">
          Name
        </label>
        <input
          autoComplete="off"
          placeholder="name"
          name="name"
          id="name"
          type="text"
          className="w-full rounded-md h-[30px] placeholder:italic pl-2 mt-2 mb-2"
          onChange={props.nameHandler}
          value={props.input.name !== "" ? props.input.name : input.name}
        />
        <label className="block text-[#576F72]" htmlFor="mata-kuliah">
          Mata Kuliah
        </label>
        <input
          autoComplete="off"
          placeholder="mata kuliah"
          name="mata-kuliah"
          id="mata-kuliah"
          type="text"
          className="w-full rounded-md h-[30px] placeholder:italic pl-2 mt-2 mb-2"
          onChange={props.courseHandler}
          value={props.input.course !== "" ? props.input.course : input.course}
        />
        <label className="block text-[#576F72]" htmlFor="nilai">
          Nilai
        </label>
        <input
          autoComplete="off"
          placeholder="nilai"
          name="nilai"
          id="nilai"
          type="text"
          className="w-full rounded-md h-[30px] placeholder:italic pl-2 mt-2 mb-2"
          onChange={props.scoreHandler}
          value={props.input.score !== "" ? props.input.score : input.score}
        />
        <button
          className="text-[#576F72] shadow-md bg-[#E9DAC1] w-[5%] rounded-full hover:bg-[#CDC2AE] active:bg-[#E9DAC1]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Cards>
  );
};

export default Form;
