import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
  <div className="top-bar">
    <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  </div>

  <div className="main-container">
    <header>
      <h1>GitHub Explorer</h1>
    </header>
    <Home />
  </div>
</div>

  );
}

export default App;
