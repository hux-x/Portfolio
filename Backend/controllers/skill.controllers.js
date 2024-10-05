const Skill = require('../models/skills.models');


//get skills 
const handleGetSkills = async(req,res)=>{
    try{
        const skills = await Skill.find({})
        console.log(skills)
        if(!skills) res.status(404).json({error:'no skills found'})
        res.status(201).json(skills)
    }catch(error){
        console.log(error)
        res.status(400).json({error:'Internal server error'})
    }
}

// Handle adding a new skill
const handleAddSkill = async (req, res) => {
    try {
        const { skillTitle, experience, detail, coverImageURL } = req.body;
        const newSkill = await Skill.create({ skillTitle, experience, detail, coverImageURL });
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(400).json({ error: 'Internal server error' });
    }
};

// Handle editing a skill
const handleEditSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { skillTitle, experience, detail, coverImageURL } = req.body;
        const updatedSkill = await Skill.findByIdAndUpdate(
            id,
            { skillTitle, experience, detail, coverImageURL },
            { new: true, runValidators: true } 
        );
        if (!updatedSkill) {
            return res.status(404).json({ error: 'Skill not found' });
        }

        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(400).json({ error: 'Internal server error' });
    }
};

// Handle deleting a skill
const handleDeleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSkill = await Skill.findByIdAndDelete(id);

        if (!deletedSkill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Internal server error' });
    }
};



module.exports = {
    handleAddSkill,
    handleEditSkill,
    handleDeleteSkill,
    handleGetSkills
};
