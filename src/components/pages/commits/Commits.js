import React from "react";
import { MdSearch } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import {
  commit,
  commitwrapper,
  commitviewer,
  commitsearchbar,
  commitsearchicon,
  searchcommit,
  commitbtn,
  commitfeather,
  commitreponame,
  selectedrepo,
  commitlist
} from "./commits.module.css";

const Commits = () => {
  return (
    <div className={commit}>
      <div className={commitwrapper}>
        <span className={commitviewer}>CommitViewer</span>
        <div className={commitsearchbar}>
          <MdSearch className={commitsearchicon} />
          <input type="search" placeholder="E.g Facebook/react" />
        </div>
        <span className={searchcommit}>
          <button className={commitbtn}>
            See Commits <GiFeather className={commitfeather} />{" "}
          </button>
        </span>
      </div>
      <div className={commitreponame}>
        <span className={selectedrepo}>microsoft/vscode</span>
      </div>
      <div className={commitlist}>Loading...</div>
    </div>
  );
};

export default Commits;
