function isLoggedIn(req, res, next) {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = isLoggedIn
