import React from "react";
// import { logging, Component } from "cool-monorepo-field";
// import { logging, Component } from "@field";
// import { logging, Component } from "field";
import { logging, Component } from "../../packages/field";

const App = () => {
    logging();

    return (
        <>
            <Component />

            <h2>TODO</h2>
            <ul>
                <li>TS en la aplicacion</li>
                <li>TS desde el modulo</li>
                <li>JSX desde el modulo</li>
                <li>Hot reload desde el modulo</li>
            </ul>
        </>
    );
};

export default App;
