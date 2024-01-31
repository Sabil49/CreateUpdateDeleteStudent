const colors = require("colors");
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connectionString = await mongoose.connect('mongodb://127.0.0.1/studentsdata', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      colors.brightMagenta(
        `\nDB connected: ${connectionString.connection.host}\n`
      )
    );
  } catch (error) {
    console.log(colors.brightRed("\nConnection to link DB failed\n"));
  }
};

module.exports = dbConnect;
