const testimonial = require('../models/testimonial.models')
const handleAddTestimonials = async(req,res)=>{
    try {
        const{message,name} = req.body
        const info = await testimonial.create({message,name})
        res.status(200).json(info)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:'Internal server error'})
    }
}
const handleGetTestimonials = async(req,res)=>{
    try {
        const testimonials = await testimonial.find({})
        if(!testimonials) res.status(404).json({response:'no testimonials found'})
        res.status(202).json(testimonials)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:'Internal server error'})
    }
}
const handleApproveTestimonial = async(req,res)=>{
    const {id} = req.body
    try {
        const options = {
          new: true, 
          runValidators: true, 
        };
        const updatedTestimonial = await testimonial.findByIdAndUpdate(
          id,
          { approved: true },
          options
        );
    
        if (!updatedTestimonial) {
            res.status(404).json({response:"No testimonial found against the given id"})
        } else {
            res.status(202).json(updatedTestimonial)
        }
      } catch (err) {
        console.error('Error approving testimonial:', err);
        res.status(400).json({response:"could not approve the testimonial"})
      }
}
const handleDeleteTestimonial = async(req,res)=>{
   try {
    const id = req.params.id
    const deleted = await testimonial.findByIdAndDelete(id)
    console.log(id)
    if(!deleted) res.status(404).json({response:"No testimonial found against the given id"})
    res.status(202).json(deleted)
   } catch (error) {
    console.log('error deleting a testimonial',error)
    res.status(400).json({response:"Internal server error"})
   }

}
module.exports = {handleGetTestimonials,handleAddTestimonials,handleApproveTestimonial,handleDeleteTestimonial}