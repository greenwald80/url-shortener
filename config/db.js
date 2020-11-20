const mongoose = require("mongoose");
const link =
  "mongodb+srv://user:1qaz2wsx@cluster0.kazkg.mongodb.net/links?retryWrites=true&w=majority";
//"mongodb://user:1qaz2wsx@ds247310.mlab.com:47310/url-shortener/links"
const connectDb = () => {
  return mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
