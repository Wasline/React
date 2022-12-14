import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          This project was coded by Wasline Saint fleur and is{" "}
          <a
            href="https://github.com/Wasline/React"
            target="_blank"
            rel="noreferrer"
            title="Link to this Github WeatherApp"        
          >
            open-sourced on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}