import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import {renderToPipeableStream} from "react-dom/server";
import sgMail from "@sendgrid/mail";
import App from "../src/App.jsx";

const app = express();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Handle assets (build/), GCS and App engine yaml config file
// Update / Refactor App.jsx to match current React docs version & books / seminar

// app.use(express.static("public"));
// app.use(express.static("build/static"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    // Return home page
    const {pipe} = renderToPipeableStream(<App />, {
        bootstrapScripts : ["dist/bundle.js"],
        onShellReady(){
            response.setHeader('content-type', 'text/html')
        }
    });

    fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Failed to load index.html")
        }

        return res.send(
            data.replace(
                "<div id='root'></div>",
                `<div id="root">${pipe}</div>`
            )
        );
    });
});

app.get("/seminar", (req, res) => {
    // Return seminar details
});

app.get("/books", (req, res) => {
    // Return books list
});

app.post("/contact", (req, res) => {

    // const userName = req.body.name
    // const userEmail = req.body.email
    // const phoneNumber = req.body.phone
    // const userMessage = req.body.message

    // Handle / process data (Names, Email, Phone Number & Message) & Queueing / send email to info@mcalino.com or contact@mcalino.com

    // const message = {to : "contact@mcalino.com", from : "alain@mcalino.com", subject : "Message from ...", text: "Hello ..."}
    // sgMail.send(message)
});

app.use(
    express.static(path.resolve(__dirname, ".", "dist"), {maxAge : "1d"})
);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});