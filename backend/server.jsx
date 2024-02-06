import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import {renderToPipeableStream} from "react-dom/server";
import App from "../src/App.jsx";
import Quotes from "../src/components/Quotes.jsx";
import Blogs from "../src/components/Blogs.jsx";
import BlogDetail from "../src/components/BlogDetail.jsx";

const app = express();

// Handle assets (build/), GCS and App engine yaml config file
// Replace empty div#root with App content

// app.use(express.static("public"));
app.use(express.static("build"));
//app.use(express.static("build/static"));

const port = process.env.PORT || 3004;

function getPageContent(file_name){
    // Handle failure
    const mainPage = fs.readFileSync(path.resolve(file_name), {encoding : "utf8", flag: "r"});
    return mainPage;
}

app.get("/", (req, res) => {
    // Return home page
    const {pipe} = renderToPipeableStream(<App />, {
        bootstrapScripts : ["/bundle.js"],
        onAllReady(){
            res.setHeader('content-type', 'text/html');
            // let data = getPageContent("./public/index.html");
            // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
            pipe(res);
        }
    });
});

app.get("/blog", (req, res) => {
    // Return books list
    const {pipe} = renderToPipeableStream(<Blogs />, {
            bootstrapScripts : ["/bundle.js"],
            onAllReady(){
                res.setHeader('content-type', 'text/html');
                // let data = getPageContent("./public/index.html");
                // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
                pipe(res);
            }
    });
});

app.get("/blog/:id", (req, res) => {
    // Return books list
    const {pipe} = renderToPipeableStream(<BlogDetail />, {
            bootstrapScripts : ["/bundle.js"],
            onAllReady(){
                res.setHeader('content-type', 'text/html');
                // let data = getPageContent("./public/index.html");
                // Load blog detail
                // https://edincitaku.com/01-loading-html-file-react/; https://www.npmjs.com/package/html-react-parser
                // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
                pipe(res);
            }
    });
});

app.get("/quotes", (req, res) => {
    // Return books list
    const {pipe} = renderToPipeableStream(<Quotes />, {
            bootstrapScripts : ["/bundle.js"],
            onAllReady(){
                res.setHeader('content-type', 'text/html');
                // let data = getPageContent("./public/index.html");
                // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
                pipe(res);
            }
    });
});

// app.get("/seminar", (req, res) => {
//     // Return seminar details
//     const {pipe} = renderToPipeableStream(<Seminar />, {
//         bootstrapScripts : ["dist/bundle.js"],
//         onAllReady(){
//             res.setHeader('content-type', 'text/html');
//             // let data = getPageContent("./public/index.html");
//             // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
//             pipe(res);
//         }
//     });
// });

// app.get("/books", (req, res) => {
//     // Return books list
//     const {pipe} = renderToPipeableStream(<Books />, {
//             bootstrapScripts : ["dist/bundle.js"],
//             onAllReady(){
//                 res.setHeader('content-type', 'text/html');
//                 // let data = getPageContent("./public/index.html");
//                 // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
//                 pipe(res);
//             }
//     });
// });

app.use(
    express.static(path.resolve(__dirname, ".", "dist"), {maxAge : "1d"})
);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});