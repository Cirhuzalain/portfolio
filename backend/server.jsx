import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMSever from "react-dom/server";
import sgMail from "@sendgrid/mail";
import App from "../src/App.js";

const app = express();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Handle assets (build/), GCS and App engine yaml config file, Add / Review esbuild loader for static assets
app.use(
    express.static(path.resolve(__dirname, ".", "dist"), {maxAge : "1d"})
);
// app.user(express.static("public"));
// app.user(express.static("build/static"));

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
    // Return home page
    fs.readFile(path.resolve("./public/index.html", "utf-8", (error, data) => {
        if (error) {
            console.error(error)
            return res.status(500).send("Failed to load index.html")
        }

        return res.send(
            data.replace(
                "<div id='root'></div>",
                `<div id="root">${ReactDOMSever.renderToString(<App />)}</div>`
            )
        );
    }));
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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})