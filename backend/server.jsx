import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import {renderToPipeableStream} from "react-dom/server";
import sgMail from "@sendgrid/mail";
import App from "../src/App.jsx";
import Books from "../src/components/Books.jsx";
import Seminar from "../src/components/Seminar.jsx";
import Quotes from "../src/components/Quotes.jsx";

const app = express();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Handle assets (build/), GCS and App engine yaml config file
// Replace empty div#root with App content

// app.use(express.static("public"));
// app.use(express.static("build/static"));

const port = process.env.PORT || 3000;

function getPageContent(file_name){
    // Handle failure
    const mainPage = fs.readFileSync(path.resolve(file_name), {encoding : "utf8", flag: "r"});
    return mainPage;
}

app.get("/", (req, res) => {
    // Return home page
    const {pipe} = renderToPipeableStream(<App />, {
        bootstrapScripts : ["dist/bundle.js"],
        onAllReady(){
            res.setHeader('content-type', 'text/html');
            // let data = getPageContent("./public/index.html");
            // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
            pipe(res);
        }
    });
});

app.get("/seminar", (req, res) => {
    // Return seminar details
    const {pipe} = renderToPipeableStream(<Seminar />, {
        bootstrapScripts : ["dist/bundle.js"],
        onAllReady(){
            res.setHeader('content-type', 'text/html');
            // let data = getPageContent("./public/index.html");
            // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
            pipe(res);
        }
    });
});

app.get("/books", (req, res) => {
    // Return books list
    const {pipe} = renderToPipeableStream(<Books />, {
            bootstrapScripts : ["dist/bundle.js"],
            onAllReady(){
                res.setHeader('content-type', 'text/html');
                // let data = getPageContent("./public/index.html");
                // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
                pipe(res);
            }
    });
});

app.get("/quotes", (req, res) => {
    // Return books list
    const {pipe} = renderToPipeableStream(<Quotes />, {
            bootstrapScripts : ["dist/bundle.js"],
            onAllReady(){
                res.setHeader('content-type', 'text/html');
                // let data = getPageContent("./public/index.html");
                // data.replace("<div id='root'></div>", `<div id="root">${res.body}</div>`);
                pipe(res);
            }
    });
});

app.post("/contact", (req, res) => {

    // const userName = req.body.name
    // const userEmail = req.body.email
    // const phoneNumber = req.body.phone
    // const userMessage = req.body.message

    // Handle / process data (Names, Email, Phone Number & Message) & Queueing / send email to info@mcalino.com or contact@mcalino.com

    // const message = {to : "contact@mcalino.com", from : "alain@mcalino.com", subject : "Message from ...", text: "Hello ..."}
    // sgMail.send(message)
    // Return success or failure message
});

app.use(
    express.static(path.resolve(__dirname, ".", "dist"), {maxAge : "1d"})
);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});