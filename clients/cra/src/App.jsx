import React from "react";
import { logging, Component } from "cool-monorepo-field";
import { hot } from "react-hot-loader";

const App = () => {
    logging();

    return (
        <>
            <Component />

            <h2>TODO</h2>
            <ul>
                <li>JSX desde el modulo</li>
                <li>Hot reload desde el modulo</li>
            </ul>
        </>
    );
};

export default hot(App);
