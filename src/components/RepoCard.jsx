import React from "react";

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card fade-in">
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description"}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        🔗 Visit Repo
      </a>
    </div>
  );
};

export default RepoCard;
