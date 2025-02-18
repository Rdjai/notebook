import express from "express";
import bodyParser from "body-parser";
import db from './config/db.js'
import router from './route/notes.js'

const App = express();
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use("/api", router);
App.get("/", (req, res) => {
    res.send("this is note app")
})

App.listen(3000, () => {
    console.log("server started");
})


