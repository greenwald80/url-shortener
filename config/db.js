const mongoose = require("mongoose");
const link =process.env.DB;
const connectDb = () => {
  return mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
