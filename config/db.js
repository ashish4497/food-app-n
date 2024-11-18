const mongoose = require("mongoose");

//Function to connect mongoose
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MOBDB_URL);
    console.log(`connected to MongoDb, ${mongoose.connection.host}`);
  } catch (error) {
    console.log("DB Error", error);
  }
};

module.exports = connectDb;
