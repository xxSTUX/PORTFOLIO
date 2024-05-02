import React from "react";
import ReactDOM from "react-dom/client";
import Swal from 'sweetalert2'
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onkeydown = function (e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85) || (e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
    Swal.fire({
      title: "OOPS!",
      text: "Viewing the page source is disabled on this website.",
      icon: "error"
    });
    return false;
  }
};

document.oncontextmenu = function () { 
  Swal.fire({
    title: "OOPS!",
    text: "The right-click is disabled on this website.",
    icon: "error"
  });
  return false; 
};