import React from "react";
import { MdSearch } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="search-wrapper">
          <MdSearch className="search-icon" />
          <input type="search" placeholder="E.g Facebook/react" />
        </div>
        <span className="search-commit">
          <Link to="/commits/owner/repo">
            <button className="search-commit-btn">
              See Commits <GiFeather className="feather" />{" "}
            </button>
          </Link>
        </span>
      </div>
      <div className="repos">
        <p className="suggested-repo">Or pick one of the suggested repos</p>
        <ul className="search-list">
          <li className="search-list-item">
            {" "}
            <Link className="link" to="/commits/django/django">
              django/django
            </Link>
          </li>
          <li className="search-list-item">
            {" "}
            <Link className="link" to="/commits/microsoft/vscode">
              microsoft/vscode
            </Link>
          </li>
          <li className="search-list-item">
            {" "}
            <Link className="link" to="/commits/vuejs/vue">
              vuejs/vue
            </Link>
          </li>
          <li className="search-list-item">
            {" "}
            <Link className="link" to="/commits/freecodecamp/freecodecamp">
              freecodecamp/freecodecamp
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Search;
