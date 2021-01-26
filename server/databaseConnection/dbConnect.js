const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

if (process.env.MONGO_DB) {
  mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(`There was an error connecting to the database: ${err}`);
});

db.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database`
  );
});

module.exports = db;