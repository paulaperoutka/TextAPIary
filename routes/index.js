
const models  = require("../models");
const express = require("express");
const router  = express.Router();
const sms = require('../controller/sms.js');

router.get("/", (req, res) => {
  models.User.findAll({}).then((users) => {
    res.render("index", {
      title: "placeholder",
      users: users
    });
  });
});

router.get("/surf", (req, res) => {
  models.User.findAll({}).then((users) => {
    res.render("index", {
      title: "placeholder",
      users: users
    });
  });
});

router.get("/about", (req, res) => {
  models.User.findAll({}).then((users) => {
    res.render("index", {
      title: "placeholder",
      users: users
    });
  });
});

router.get("/faq", (req, res) => {
  models.User.findAll({}).then((users) => {
    res.render("index", {
      title: "placeholder",
      users: users
    });
  });
});

module.exports = router;

