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
  commitloading,
  back,
  commitdata,
  commitlistdata,
  commitlistitem,
  commitlistinfo,
  commitlistimg,
  commitimgname,
  commitname,
  commitmsg,
  commitdate,
  msg,
} from "./commits.module.css";
import { Link } from "react-router-dom";

const Commits = (props) => {
  const {
    match: {
      params: { owner, repo },
    },
  } = props;
  // console.log("props", props)
  // console.log(owner);

  // console.log(repo);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  console.log("CO", commits);

  const headers = {
    Accept: "application/vnd.github.cloak-preview",
  };

  const getCommits = async ({ owner, repo }) => {
    const Base_Url = `https://api.github.com/search/commits?q=repo:${owner}/${repo} author-date:2021-07-01..2021-07-30`;

    setLoading(true);
    const data = await fetch(Base_Url, {
      method: "GET",
      headers: headers,
    });
    const dataResult = await data.json();
    console.log(dataResult.items);
    setCommits(
      dataResult.items.slice(0, 6).map(
        ({
          author: { avatar_url },
          commit: {
            author: { name, date },
            message,
          },
        }) => ({
          avatar_url,
          name,
          message,
          date,
        })
      )
    );
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
        <div className={commitloading}>Loading...</div>
      ) : (
        // <pre>{JSON.stringify(commits, null, 1)}</pre>

        commits.map((item) => (
          <div className={commitdata}>
            <ul key={item.id} className={commitlistdata}>
              <li className={commitlistitem}>
                <div className={commitlistinfo}>
                  <div className={commitimgname}>
                    <img
                      src={item.avatar_url}
                      alt=""
                      className={commitlistimg}
                    />
                    <span className={commitname}>{item.name}</span>
                  </div>
                  <p className={commitmsg}>{item.message}</p>
                  <span className={commitdate}>{item.date}</span>
                </div>
               
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Commits;
