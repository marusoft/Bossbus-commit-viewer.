import React, { useState, useEffect } from "react";
import { MdSearch, MdKeyboardBackspace } from "react-icons/md";
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
  commitlist,
  back,
} from "./commits.module.css";
import { Link } from "react-router-dom";

const Commits = (props) => {
  const {
    match: {
      params: { owner, repo },
    },
  } = props;
  // console.log(owner);

  // console.log(repo);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const headers = {
    Accept: "application/vnd.github.cloak-preview",
  };

  const getCommits = async ({ owner, repo }) => {
    const Base_Url = `https://api.github.com/search/commits?q=repo:${owner}/${repo} author-date:2021-07-01..2021-07-03`;

    setLoading(true);
    const data = await fetch(Base_Url, {
      method: "GET",
      headers: headers,
    });
    const dataResult = await data.json();
    console.log(dataResult.items);
    setCommits(dataResult?.items);
    setLoading(false);
  };

  useEffect(() => {
    getCommits({ owner, repo });
  }, [owner, repo]);

  return (
    <div className={commit}>
      <div className={commitwrapper}>
        <Link to="/home">
          {" "}
          <MdKeyboardBackspace className={back} />
        </Link>
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
        <span className={selectedrepo}>
          {owner}/{repo}
        </span>
      </div>
      {loading ? (
        <div className={commitlist}>Loading...</div>
      ) : (
        <div>{JSON.stringify(commits?.slice(0, 5), null, 1)}</div>
        // {author.avatar_url}
        // {commit.author.name}
        // {commit.message}
        // {commit.author.date}
      )}
    </div>
  );
};

export default Commits;
