import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/guthub/githubContext";
const Repos = () => {
  const githubContext = useContext(GithubContext);
  return githubContext.repos.map((repo) => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};

export default Repos;
