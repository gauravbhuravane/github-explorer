import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile fade-in">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        🔗 View GitHub Profile
      </a>
    </div>
  );
};

export default UserProfile;
