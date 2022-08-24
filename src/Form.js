import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div>
      <form id="city-form" className="mb-4">
        <input
          type="search-button"
          placeholder="Where to ?"
          autocomplete="off"
          autofocus="on"
          id="city-input"
        />{" "}
        <button
          type="button"
          className="btn btn-outline-primary"
          id="searchButton"
          title="Search Icon "
        >
          🔎
        </button>{" "}
        
        <button type="button" className="btn btn-outline-primary" id="geo-btn">
          <img
            src="images/PinIcon.png"
            width="18"
            height="20"
            alt="Blue pin location emoji"
            title="Blue Map Pin Icon"
          ></img>
        </button>
      </form>
    </div>
  );
}
