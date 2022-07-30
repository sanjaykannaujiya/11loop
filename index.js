const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(bodyparser.json())
const Db = require("./Inventri/config/db")
const UserRoute = require("./Inventri/router/UserRoute")
const Sim=require('./Inventri/router/Sim');
const Device = require("./Inventri/router/Device");
app.use('/api', UserRoute)
app.use('/api', Sim)
app.use('/api', Device)
app.listen(PORT, () => { console.log(`server ${PORT}`) })