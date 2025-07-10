import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import UserProfile from "../components/UserProfile";

const Home = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(1);

  const fetchRepos = async () => {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=6`
    );
    const data = await res.json();
    setRepos(data.items || []);
  };

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${query}`);
    const data = await res.json();
    if (!data.message) setUser(data);
    else setUser(null);
  };

  const handleSearch = () => {
    setPage(1);
    fetchRepos();
    fetchUser();
  };

  useEffect(() => {
    if (query) {
      fetchRepos();
    }
  }, [page]);

  return (
    <div className="container fade-in">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search GitHub..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {user && <UserProfile user={user} />}

      <div className="repo-list">
        {repos.length > 0 ? (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <p className="no-content">No repositories found.</p>
        )}
      </div>

      {repos.length > 0 && (
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            ⬅️ Previous
          </button>
          <span>Page {page}</span>
          <button onClick={() => setPage(page + 1)}>Next ➡️</button>
        </div>
      )}
    </div>
  );
};

export default Home;
