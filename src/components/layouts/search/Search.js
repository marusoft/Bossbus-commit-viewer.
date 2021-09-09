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
          <Link to="/commits">
            <button className="search-commit-btn">
              See Commits <GiFeather className="feather" />{" "}
            </button>
          </Link>
        </span>
      </div>
      <div className="repos">
        <p className="suggested-repo">Or pick one of the suggested repos</p>
        <ul className="search-list">
          <li className="search-list-item">django/django</li>
          <li className="search-list-item">microsoft/vscode</li>
          <li className="search-list-item">jezen/is-thirteen</li>
          <li className="search-list-item">benawad/dogehouse</li>
        </ul>
      </div>
    </>
  );
};

export default Search;
