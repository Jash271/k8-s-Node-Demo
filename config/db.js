const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const config = require('config');
const db = config.get('mongoURI');
const conn = process.env.CONN;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    console.log(1);
    //Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
