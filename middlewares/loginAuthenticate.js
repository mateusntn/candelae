module.exports = (req, res, next) => {
    if (req.session.userLoged != null) {
        next();
    } else {
        res.redirect('/users/login');
    }
}