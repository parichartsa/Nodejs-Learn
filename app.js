const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const Medicine = require("./data/medicine.json")
const path = require('path')
const medicineRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

medicineRouter.route("/").get((req,res) => {
    res.render("medicine", {
        medicine:[
            {medicineName : 'Amoxilin', medicineDesc : 'แก้อักเสบ', medicineUse : '1 cap 2 times'},
            {medicineName : 'Para', medicineDesc : 'แก้ปวด', medicineUse : 'every 6 hr.'},
            {medicineName : 'Tiffy', medicineDesc : 'ลดไข้', medicineUse : 'every 6 hr.'},
            {medicineName : 'VitaminC', medicineDesc : 'วิตามิน', medicineUse : '1 cap moring'},   
        ],
    });
});
medicineRouter.route("/1").get((req,res) => {
    res.send("Hello World. It's Medicine1");
});

app.use("/medicine", medicineRouter)

app.get("/", (req,res) => {

    res.render('index', {username : "Onicha", friend : ["Tah", "Alitah", "On", "cha"]})
})

app.listen(PORT, () => {

    debug("listening on PORT" + chalk.green(" : " + PORT));
})