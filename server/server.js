import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';

import ourLoads from './routes/load.js';
import ourUsers from './routes/user.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const ATLAS_URI = process.env.MONGO_DB;
const app = express();

if (process.env.NODE_ENV !== "production") {
    console.log("loading dev environment.");
  }

mongoose.connect(ATLAS_URI, 
                {useNewUrlParser: true, 
                useCreateIndex: true,
                useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`API Server listening on ${PORT}`)))
        .then(() => app.use(bodyParser.json({ limit: "30mb", extended: true })))
        .then(() => app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })))
        .then(() => app.use('/u', ourUsers))
        .then(() => app.use('/l', ourLoads))
        .catch((error) => console.log("An Error Occurred: ", error)
      );
