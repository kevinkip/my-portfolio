const express = require('express')
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    port: 465,
    host: "smtp.gmail.com"
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
})

// router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     const mail = {
//         from 
//     }
// })