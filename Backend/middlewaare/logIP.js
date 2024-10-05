const logIP = async(req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log('Visitor IP:', ip);
    next();
  }
module.exports = logIP