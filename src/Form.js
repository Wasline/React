import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div>
      <form id="city-form" className="mb-4">
        <input
          type="search-button"
          placeholder="Where to?"
          autocomplete="off"
          autofocus="on"
          id="city-input"
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          id="searchButton"
        >
          Search
        </button>
        <button className="btn btn-outline-primary" id="geo-btn">
          Here
        </button>
      </form>
    </div>
  );
}
