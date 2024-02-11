const { Router } = require("express");
const bcrypt = require("bcrypt");

const router = new Router();

const { User } = require("../../db/models");

router.post("/register", async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const allUser = await User.findOne({ where: { login } });
    if (allUser) {
      res.json({ err: "Такой пользователь уже существует!" });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ login, email, password: hash });
      req.session.user = {
        id: user.id,
        login: user.login,
        email: user.email,
      };
      req.session.save(() => {
        res.json({ msg: "Пользователь успешно зарегистрирован!" });
      });
    }
  } catch (error) {
    console.log("Ошибка при регистрации User", error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ err: "Такой пользователь не найден! Зарегистрируйтесь!" });
    } else {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        req.session.user = {
          id: user.id,
          login: user.login,
          email: user.email,
        };
        req.session.save(() => {
          res.json({ msg: "Вы успешно вошли!" });
        });
      } else {
        res.json({ err: "Неверный пароль" });
      }
    }
  } catch (error) {
    console.log("Ошибка при входе на сайт", error);
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie("ExamCookie");
      res.redirect("/");
    });
  } catch (error) {
    console.log("Ошибка в logout", error);
  }
});

module.exports = router;
