import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then((res) => setUser(res.data))
      .catch(() => alert("Failed to load user"));
  }, [username]);

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt="avatar" className="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <p>Public Repositories: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">View GitHub Profile</a>
    </div>
  );
};

export default UserDetails;
