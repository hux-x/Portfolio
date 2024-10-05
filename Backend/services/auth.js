const jwt = require('jsonwebtoken')

const createToken = async (username)=>{
   
    const token =  jwt.sign({username},process.env.JWT_KEY)
    return token
}
const validateToken = (ADMIN_KEY)=>{
    return jwt.verify(ADMIN_KEY,process.env.JWT_KEY)
}
module.exports = {createToken,validateToken}