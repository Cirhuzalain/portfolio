import React from "react";
import {hydrateRoot} from "react-dom/client"
import "./index.css";
import App from "./App";
import Blogs from "../src/components/Blogs.jsx";
import Quotes from "../src/components/Quotes.jsx";
import BlogDetail from "../src/components/BlogDetail.jsx";
import * as serviceWorker from "./serviceWorker";

const pathName = window.location.pathname;

if (pathName == "/"){
    hydrateRoot(document, <App />);
} else if (pathName == "/blog"){
    hydrateRoot(document, <Blogs />);
} else if (pathName == "/quotes"){
    hydrateRoot(document, <Quotes />);
} else {
    hydrateRoot(document, <BlogDetail />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
