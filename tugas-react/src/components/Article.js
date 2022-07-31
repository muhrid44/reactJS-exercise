import React, { useState } from "react";
import Author from "./Author";

import "./Article.css";

const Article = () => {
  const [isShowed, setIsShowed] = useState(true);

  const onClickHandlerHide = () => {
    setIsShowed(false);
  };

  const onClickHandlerShow = () => {
    setIsShowed(true);
  };

  return (
    <div className="article-head">
      <h1>Judul Artikel</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {isShowed ? (
        <button type="button" onClick={onClickHandlerHide}>
          Show Author
        </button>
      ) : (
        <Author showAuthor={onClickHandlerShow} />
      )}
    </div>
  );
};

export default Article;
