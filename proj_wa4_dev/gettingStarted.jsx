import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import Example from "./components/Example";
import Header from "./components/Mark";

ReactDOM.render(
    (<><Header></Header><Example /></>),
    document.getElementById("reactapp")
);
