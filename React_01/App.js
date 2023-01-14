import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/Header";

import Body from "./src/components/Body";

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

const AppLayout = () => {
  return (
    <>
    <div className="container">
      <HeaderComponent />
      <Body />
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
app_root.render(<AppLayout />);
