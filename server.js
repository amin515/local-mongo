
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const mongoDBconnect = require('./Config/db');
const { userController, foodController } = require('./Controllers/testControllers');
dotenv.config();

// express init

const app = express();

userController();
// foodController();
// envirement variables
const PORT = process.env.PORT || 5000;




// server listner

app.listen(PORT, () => {
    mongoDBconnect();
    console.log(`server running on port ${PORT}`.bgCyan.black)
})


