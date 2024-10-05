const project = require('../models/projects.models')
const handleGetProjects = async(req,res)=>{
try {
    const updates = await project.find({})
    if(updates.length == 0) return res.status(200).json({response:"no updates found"})
    res.status(200).json(updates)
} catch (error) {
    console.log(error)
    res.status(400).json({response:"Internal server error"})
}
}
const handleAddProject = async(req,res)=>{
try {
    const {title,content,coverImageURL,link} = req.body
const newProject = await project.create({title,content,coverImageURL,link})
if(!newProject) return res.status(400).json({response:"error adding the project"})
res.status(202).json(newProject)
} catch (error) {
    console.log(error)
    return res.status(400).json({response:"Internal server error"})
}
}
const handleDeleteProject = async(req,res)=>{
try {
    const id = req.params.id
const deletedProject = await project.findByIdAndDelete(id)
if(!deletedProject) return res.status(404).json({response:"no Project found against the given id"})
res.status(202).json(deletedProject)
} catch (error) {
    console.log(error)
    res.status(400).json({response:"Internal server error"})
}
}
module.exports = {handleAddProject,handleDeleteProject,handleGetProjects}