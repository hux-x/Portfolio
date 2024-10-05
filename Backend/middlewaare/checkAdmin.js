const {validateToken} = require('../services/auth')
const checkAdmin = async(req,res,next)=>{
    if(!req.cookies.admin) return res.status(403).json({response:'You do not have the authorization to perform this action'})
    if(validateToken(req.cookies.admin)){
        next()
    }else{
        res.status(400).json({response:'Invalid credentials'})
    }
   
}
module.exports = checkAdmin