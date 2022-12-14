const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const medicine = require("./data/medicine.json")
const path = require('path')
const medicineRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

medicineRouter.route("/").get((req,res) => {
    res.render("medicine", 
        medicine,
    );
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