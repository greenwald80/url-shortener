const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const indexRoutes = require("./routes/index");
const linkRoutes = require("./routes/links");
const connectDb = require("./config/db");

//позволяет использовать статичные файлы из папки public относительно корня сервера (index.js)
app.use(express.static(path.join(__dirname, "public")));
//разрешает серверу считывать данные, отправленные с обычных форм html
app.use(bodyParser.urlencoded({ extended: true }));
//позволяет серверу парсить данные, отправленные в формате JSON
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "views");

// app.get("/", (req, res) => {
//   return res.render("index",{variable:'variable'});
// });
app.use(indexRoutes);
app.use("/links", linkRoutes);

//because mongoose return promise
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", JSON.stringify(err));
  });
