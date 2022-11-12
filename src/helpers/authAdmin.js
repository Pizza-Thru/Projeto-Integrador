
module.exports.checkAuthAdm = (req, res, next) => {
    if (req.session.userid) {
        next()
    } else {
        res.redirect('/Admin/login')
        
    }
} 