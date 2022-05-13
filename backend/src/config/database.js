const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.7dkno.mongodb.net/viet-movie?retryWrites=true&w=majority"
    );
    console.log("connect database thành công !");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
