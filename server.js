
const express = require("express")
const sgMail = require("@sendgrid/mail")
const app = express()

// app.use()

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const port = process.env.PORT || 9000

app.get("/", (req, res) => {
    // Return build/index.html
})
app.post("/contact", (req, res) => {
    // Handle / process data (Names, Email, Phone Number & Message) & Queueing / send email to info@mcalino.com or contact@mcalino.com

    // const message = {to : "contact@mcalino.com", from : "alain@mcalino.com", subject : "Message from ...", text: "Hello ..."}
    // sgMail.send(message)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})