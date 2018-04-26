function isLoggedIn(req, res, next) {
  if (!req.session.email) {
    return next()
  } else {
    return redirect('/home')
  }
}

module.exports = isLoggedIn
