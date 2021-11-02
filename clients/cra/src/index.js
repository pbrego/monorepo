/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    const axe = require("@axe-core/react");

    axe(React, ReactDOM, 1000, {}, undefined);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
