const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const Medicine = require("./data/medicine.json")
const path = require('path')
const MedicineRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

MedicineRouter.route("/").get((req,res) => {
    res.render("Medicine", 
        Medicine,
    );
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