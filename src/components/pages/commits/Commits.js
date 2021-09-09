import React from "react";
import { MdSearch } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import "./commits.css";

const Commits = () => {
  return (
    <div className="commit">
      <div className="commit-wrapper">
        <span className="commit-viewer">CommitViewer</span>
        <div className="commit-search-bar">
          <MdSearch className="commit-search-icon" />
          <input type="search" placeholder="E.g Facebook/react" />
        </div>
        <span className="search-commit">
          <button className="commit-btn">
            See Commits <GiFeather className="commit-feather" />{" "}
          </button>
        </span>
      </div>
      <div className="commit-repo-name">
        <span className="selected-repo">microsoft/vscode</span>
      </div>
      <div className="commit-list">Loading...</div>
    </div>
  );
};

export default Commits;
