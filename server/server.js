const express = require('express');
const session = require('express-session');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const passPort = require ('passport');
require ('dotenv').config();

const PORT = process.env.PORT || 5000;
const ATLAS_URI = process.env.MONGO_DB;
const server = express();

const ourLoads = require ('./routes/load.js');
const ourUsers = require ('./routes/user.js');


if (process.env.NODE_ENV !== "production") {
    console.log("loading dev environment.");
  }

mongoose.connect(ATLAS_URI, 
                {useNewUrlParser: true, 
                useCreateIndex: true,
                useUnifiedTopology: true })
        .then(() => server.listen(PORT, () => console.log(`API Server listening on ${PORT}`)))
        .then(() => server.use(bodyParser.json({ limit: "30mb", extended: true })))
        .then(() => server.use(bodyParser.urlencoded({ limit: "30mb", extended: true })))
        .then(() => server.use('/u', ourUsers))
        .then(() => server.use('/l', ourLoads))
        .catch((error) => console.log("An Error Occurred: ", error)
      );
