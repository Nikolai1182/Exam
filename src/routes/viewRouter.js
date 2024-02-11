const { Router } = require("express");

const { secureRouter, checkUser } = require("../middlewares/middleware");

const router = new Router();

const renderTemplate = require("../lib/renderTemplate");
const Register = require("../views/Register");
const Login = require("../views/Login");
const Main = require("../views/Main");
const Profile = require("../views/Profile");

router.get("/", async (req, res) => {
  const { user } = req.session;
  try {
    renderTemplate(Main, { user }, res);
  } catch (error) {
    console.log("Ошибка в ручке Main", error);
  }
});

router.get("/register", secureRouter, (req, res) => {
  try {
    renderTemplate(Register, null, res);
  } catch (error) {
    console.log("Ошибка в ручке Register", error);
  }
});

router.get("/login", secureRouter, (req, res) => {
  try {
    renderTemplate(Login, null, res);
  } catch (error) {
    console.log("Ошибка в ручке Login", error);
  }
});

router.get("/profile", checkUser, (req, res) => {
  const { user } = req.session;
  try {
    renderTemplate(Profile, { user }, res);
  } catch (error) {
    console.log("Ошибка в ручке Profile", error);
  }
});

module.exports = router;
