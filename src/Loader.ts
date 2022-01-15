import * as React from "react";
import {render} from "react-dom";
import {Application} from "./Application";

const documentElement = document.getElementsByTagName("body")[0];
const reactElement = React.createElement(Application);

render(reactElement, documentElement);
