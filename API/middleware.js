const path = require('path');

module.exports = (req, res, next) => {
    // use originalUrl since other middleware is likely reassigning req.url
    const isApiRoute = req.originalUrl.includes('/api/');

    if (isApiRoute) return next();

    return res.sendFile(path.join(__dirname + '/../build/index.html'));
}