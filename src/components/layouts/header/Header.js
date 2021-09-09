import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <h2 className="logo-title">CommitViewer</h2>
        </div>
        <div className="navigation">
          <ul className="nav-list">
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="description-container">
        <div className="description">
          <h3 className="description-title">Discover the world of code</h3>
          <p className="description-paragraph">
            Explore open source projects from GitHub, and read their commit
            history to see the story of how they were built.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
