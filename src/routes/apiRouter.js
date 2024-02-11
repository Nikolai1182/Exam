const { Router } = require("express");

const apiRouter = new Router();

const userRouter = require("./userRouter");

const viewRouter = require("./viewRouter");

apiRouter.use("/users", userRouter);

apiRouter.use("/", viewRouter);

module.exports = apiRouter;
