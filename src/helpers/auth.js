
module.exports.checkAuth = (req, res, next) => {
    if (req.session.userid) {
        next()
    } else {
        res.redirect('/login')
        
    }
} 