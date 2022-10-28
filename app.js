const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path')
const MedicineRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

MedicineRouter.route("/").get((req,res) => {
    res.render("Medicine", {
        Medicine:[
            {Medicinename : "Amoxilin", Meddesc : "แก้อักเสบ", Meduse : "เช้า-เย็น ครั้งละ 2 เม็ด"},
            {Medicinename : "Para", Meddesc : "แก้ปวด", Meduse : "ทุก 6 ชม."},
            {Medicinename : "Tiffy", Meddesc : "ลดไข้", Meduse : "เช้า-เย็น ครั้งละ 1 เม็ด"},
            {Medicinename : "Vitamin C", Meddesc : "วิตามิน C 500 ml.", Meduse : "วันละ 1 เม็ด"},
        ],
    });
});
MedicineRouter.route("/1").get((req,res) => {
    res.send("Hello World. It's Medicine1");
});

app.use("/Medicine", MedicineRouter)

app.get("/", (req,res) => {

    res.render('index', {username : "Onicha", friend : ["Tah", "Alitah", "On", "cha"]})
})

app.listen(PORT, () => {

    debug("listening on PORT" + chalk.green(" : " + PORT));
})