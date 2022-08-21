import React from "react";
import Form from "./Form";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div id="root">
        <div className="card" id="first">
          <div className="card-body">
            <Form />
            <Search />
          </div>
        </div>
      </div>
      <div>
        <button>
          <Footer />
        </button>
      </div>
    </div>
  );
}
