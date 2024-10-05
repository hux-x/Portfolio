const email = require('../models/mails.models')
const handleSendEmail = async(req,res)=>{
    try {
        const{message,sender} = req.body
        const info = await email.create({message,sender})
        if(!info) res.status(400).json({error:'could not send the mail'})
        res.status(200).json(info)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:'Internal server error'})
    }
}
const handleGetEmails = async(req,res)=>{
    try {
        const emails = await email.find({})
        if(!emails) res.status(404).json({response:'no emails found'})
        res.status(202).json(emails)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:'Internal server error'})
    }
}
module.exports = {handleGetEmails,handleSendEmail}