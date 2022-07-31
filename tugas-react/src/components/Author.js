import React from "react";

import "./Author.css";
import profile from "../img/killua.jpg";

const Author = (props) => {
  return (
    <div className="author-content">
      <img src={profile} alt="killua.jpg"></img>
      <code>Posted by : John doe, 29 Juni 2035</code>
      <button type="button" onClick={props.showAuthor}>
        Hide Author
      </button>
    </div>
  );
};

export default Author;
