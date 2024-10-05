const update = require('../models/updates.models')
const handleGetUpdates = async(req,res)=>{
try {
    const updates = await update.find({})
    if(updates.length == 0) return res.status(200).json({response:"no updates found"})
    res.status(200).json(updates)
} catch (error) {
    console.log(error)
    res.status(400).json({response:"Internal server error"})
}
}
const handleCreateUpdate = async(req,res)=>{
try {
    const {title,content,imageURL,link} = req.body
const newUpdate = await update.create({title,content,imageURL,link})
if(!newUpdate) return res.status(400).json({response:"error creating the update"})
res.status(202).json(newUpdate)
} catch (error) {
    console.log(error)
    return res.status(400).json({response:"Internal server error"})
}
}
const handleDeleteUpdate = async(req,res)=>{
try {
    const id = req.params.id
const deletedUpdate = await update.findByIdAndDelete(id)
if(!deletedUpdate) return res.status(404).json({response:"no update found against the given id"})
res.status(202).json(deletedUpdate)
} catch (error) {
    console.log(error)
    res.status(400).json({response:"Internal server error"})
}
}
module.exports = {handleCreateUpdate,handleDeleteUpdate,handleGetUpdates}