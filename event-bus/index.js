const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://127.0.0.1:4000/events", event);
  axios.post("http://127.0.0.1:4001/events", event);
  axios.post("http://127.0.0.1:4002/events", event);

  res.send({ status: "ok" });
});

app.listen(4005, () => console.log("listening on 4005"));
