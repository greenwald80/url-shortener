const express = require("express");
const Link = require("../models/link");
const router = express.Router();

router.get("/", async (req, res) => {
  const lastAddedLinks = await Link.find({}).sort({ date: -1 }).limit(3); //.find({}).sort({date:-1}).limit(3)
  console.log(lastAddedLinks);
  return res.render("index", { links: lastAddedLinks || [] });
});

module.exports = router;
