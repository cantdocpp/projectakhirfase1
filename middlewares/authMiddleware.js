function isLoggedIn(req, res, next) {
  if (!req.session.email) {
    return next()
  } else {
    return res.redirect('/home')
  }
}

module.exports = isLoggedIn
