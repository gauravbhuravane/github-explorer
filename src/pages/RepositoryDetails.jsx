import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RepositoryDetails = () => {
  const { owner, repo } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => setData(res.data))
      .catch(() => alert("Failed to load repository details"));
  }, [owner, repo]);

  if (!data) return <p className="loading">Loading...</p>;

  return (
    <div className="details">
      <h2>{data.full_name}</h2>
      <p>{data.description}</p>
      <p>⭐ Stars: {data.stargazers_count}</p>
      <p>🍴 Forks: {data.forks_count}</p>
      <p>🐞 Open Issues: {data.open_issues_count}</p>
      <a href={data.html_url} target="_blank" rel="noreferrer">Visit on GitHub</a>
    </div>
  );
};

export default RepositoryDetails;
