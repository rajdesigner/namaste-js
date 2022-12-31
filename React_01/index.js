import React from "react";
import  ReactDOM from "react-dom/client";


const heading = React.createElement('h2', {}, 'Hello World');
const para = React.createElement('h3',{}, 'My first React Program');
const container = React.createElement('div', {className: 'wrapper'}, [heading, para])

const root = document.getElementById("root");
console.log(container);


/**
 * 
 * React 18, define root
 * 
 **/

 const app_root = ReactDOM.createRoot(root);
 app_root.render(container)