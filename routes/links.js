const express = require("express");
const router = express.Router();
const Link = require("../models/link");
const shortid = require("shortid");

let APP_LINK = "localhost:3000";
if (process.env.NODE_ENV === "production") {
  APP_LINK = process.env.APP_LINK;
}

//POSTMAN => localhost:3000/links/short => POST + RAW + Body: {
//    "link": "https://www.citrus.ua/ekshn-kamery/ekshn-kamera-xiaomi-yi-4kplus-action-camera-black-638385.html"
//} => Result: {
//     "_id": "5fb68982757310401c2ee68d",
//     "code": "e9GpaT2D_",
//     "short": "localhost:3000/links/e9GpaT2D_",
//     "date": "1605798274205",
//     "__v": 0
// }
router.post("/short", async (req, res) => {
  const { link } = req.body;
  try {
    let url = await Link.findOne({ link });
    if (url) {
      return res.json(url);
    }
    const code = shortid.generate();
    const shortUrl = `${APP_LINK}/links/${code}`;
    url = new Link({
      code: code,
      source: link,
      short: shortUrl,
    });
    await url.save();
    return res.json(url);
  } catch (e) {
    return res.status(500).json({ status: 500, message: JSON.stringify(e) });
  }
});

//localhost:3000/links/XV55S4H8X
router.get("/:code", async (req, res) => {
  const { code } = req.params;
  let link = await Link.findOne({ code });
  //console.log("Link: ", link);
  if (link) {
    return res.redirect(link.source);
  }
  return res.status(404).json({ status: 404, message: "Link not found" });
});

module.exports = router;
