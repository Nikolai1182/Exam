require("dotenv").config();
require("@babel/register");

const express = require("express");
const logger = require("morgan");

const path = require("path");

const PORT = process.env.PORT || 3100;
const app = express();

const session = require("express-session");
const apiRouter = require("./src/routes/apiRouter");
const FileStore = require("session-file-store")(session);

const sessionConfig = {
  name: "ExamCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(session(sessionConfig));

app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
