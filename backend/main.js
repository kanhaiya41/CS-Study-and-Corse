const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const mongoURI = 'mongodb+srv://mevadigamers:w3tfTAJNAHnIWytH@cluster0.gxjmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create mongo connection
mongoose.connect(mongoURI);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log("connected successfully");
});

// Schema definitions
const adminSchema = new mongoose.Schema({
    Username: String,
    Password: String
});
const adminModel = mongoose.model("Admin", adminSchema);

const courseNotesSchema = new mongoose.Schema({
    heading: String,
    course: String,
    description: String,
    file: String
}, { timestamps: true });
const notesModel = new mongoose.model("coursenotes", courseNotesSchema);

app.get('/study/BasicComputer/login/:username/:password', async (req, res) => {
    try {
        const { username, password } = req.params;
        const admin = await adminModel.findOne({ Username: username, Password: password });
        if (admin) {
            res.send(admin);
        }
    } catch (error) {
        res.send("error");
    }
});

app.post('/store/:heading/:course/:description/:file', async (req, res) => {
    const decfile = decodeURIComponent(req.params.file);
    let cnotes = new notesModel({
        heading: req.params.heading,
        course: req.params.course,
        description: req.params.description,
        file: decfile
    });
    let ccc = await cnotes.save()
        .then(
            res.send({ message: 'notes added' })
        ).catch(
        // res.send({message:'error'})
    )

});

app.get('/findnotes/:urllastpart', async (req, res) => {
    try {
        const urllastpart = req.params.urllastpart;
        const Notes = await notesModel.find({ course: urllastpart });
        if (Notes) {
            res.send(Notes);
        }
    } catch (error) {
        res.send("error");
    }
});
const cdec = new mongoose.Schema({
    course: String,
    coursedec: String,
    fees: Number
});
const cdecmodel = new mongoose.model("coursedecription", cdec);

app.get('/finddec/:urllastpart', async (req, res) => {
    try {
        const urllastpart = req.params.urllastpart;
        const Notes = await cdecmodel.find({ course: urllastpart });
        if (Notes) {
            res.send(Notes);
        }
    } catch (error) {
        res.send("error");
    }
});

//set for image
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/gmail', upload.single('payss'), async (req, res) => {
    const { name, qualy, age, email, add, msj, urlLastpart } = req.body;
    const image = req.file;
    //set nodemailer transport
    const transtporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTHUSER,
            pass: process.env.AUTHPASS
        }
    });
    //body of mail
    const mailBody = {
        from: process.env.AUTHUSER,
        to: 'malikanhaiyalal35@gmail.com',
        subject: 'New Form Submisstion For the Course',
        text: `Name:${name}\nQualification:${qualy}\nAge:${age}\nEmail:${email}\nAddress:${add}\nCourse:${urlLastpart}\nMessage:${msj}`,
        attachments: [
            {
                filename: image.originalname,
                content: image.buffer,
                contentType: image.mimetype
            }
        ]
    };
    try {
        let info = await transtporter.sendMail(mailBody);
        console.log("mail sent:" + info.response);
        res.status(200).send("Email sent Successfully");
    } catch (error) {
        console.error('error sending mail:' + error);
        res.status(500).send("error sending mail:" + error.message);
    }
});

const dirname = path.resolve();
app.use(express.static(path.join(dirname, 'frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => console.log(`Server started on port ${port}`));