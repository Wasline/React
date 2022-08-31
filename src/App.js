import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";


import "./App.css";

export default function App() {
  return (
    <div className="container mt-5">
      <div id="root">
        <div className="card" id="first">
          <div className="card-body">
            <Weather defaultCity="San Fransico" />

          </div>
        </div>
      </div>
      <small>
        <Footer />
      </small>
    </div>
  );
}
