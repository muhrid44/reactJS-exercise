import React from "react";
import "./Tugas6.css";

const Cards = (props) => {
    return <div className="border-2 border-[#E9DAC1] w-[70%] mr-auto ml-auto rounded shadow-lg mt-5 p-3">{props.children}</div>
};

export default Cards;