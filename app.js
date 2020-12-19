 require("dotenv").config();
const express = require('express');
const app = express();
var cors = require('cors')

const router = require('./api/notedata/note.router');
app.use(cors())
app.use(express.json());

app.use('/api/notedata',router);

app.listen(process.env.APP_PORT,()=>{
    console.log("working fine", process.env.APP_PORT);
});