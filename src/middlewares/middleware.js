const checkUser = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
};

function secureRouter(req, res, next) {
  if (!req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = { secureRouter, checkUser };
