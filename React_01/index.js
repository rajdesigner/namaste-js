import React from "react";
import ReactDOM from "react-dom/client";

const heading_1 = React.createElement("h1", { key: "11" }, "Hello World");
const heading_2 = React.createElement("h2", { key: "12" }, "I am Rajmani");
const heading_3 = React.createElement(
  "h3",
  { key: "13" },
  "Currently working as React Dev. at KeepSpace"
);
const container = React.createElement("div", { className: "title" }, [
  heading_1,
  heading_2,
  heading_3,
]);

const root = document.getElementById("root");
console.log(container);

const HeaderComponent = () => {
  return (
    <>
      <div className="container">
        <div className="top_wrapper">
          <div className="search_logo_wrapper">
            <div className="logo">
              <h1>PICAZU</h1>
            </div>

            <div className="searchbar">
              <input type="text" /> <button>GO</button>
            </div>
          </div>

          <div className="profile">
            <a href="#">Log in</a>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 *
 * React 18, define root
 *
 **/

const app_root = ReactDOM.createRoot(root);
app_root.render(<HeaderComponent />);
