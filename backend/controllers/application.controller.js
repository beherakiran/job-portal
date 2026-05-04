import {Application} from "../models/application.model.js";
import {Job} from "../models/job.model.js";
export const applyJob = async(req,res)=>{
    try {
       const userId = req.id;
       const jobId = req.params.id;
       if(!jobId){
        return res.status(400).json({
            message:"jobId is required",
            success:false
        })
       } ;
       //check if the user has already applied for job
       const existingApplication = await Application.findOne({job:jobId, applicant:userId});
       if(existingApplication){
        return res.status(400).json({
            message:"You have already applied for this job",
            success:false
        })
       }
       //check if the job exist
       const job = await Job.findById;
       if(job.length === 0){
        return res.status(404).json({
            message:"Job not found",
            success:false
        })
       }
       //create application
       const newApplication = await Application.create({
        job:jobId,
        applicant:userId,
       });
       job.appllications.push(newApplication);
       await job.save();
       return res.status(201).json({
        message:"Job applied successfully.",
        success:true
       })
    } catch (error) {
        console.log(error);
    }
};

export const getAppliedjobs = async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAr:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}}
            }
        });
        if(!application){
        return res.status(404).json({
            message:"no application found",
            success:false
        })
       }
          return res.status(200).json({
            message:"Job found",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
//admin can see how many user applied
export const getApplicants = async(req,res)=>{
    try {
        const jobId= req.params;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(job.length === 0){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            message:" found Jobs",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateStatus = async(req,res)=>{
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(404).json({
                message:"status is required ",
                success:false
            }) 
        }
        //find application by applicant id
        const application = await Application.findOne({_id:applicationId})
        if(!application){
              return res.status(404).json({
                message:"Applicaion not found",
                success:false
            })
        }
        //update status
        application.status = status.toLowerCase();
        await application.save();

          return res.status(200).json({
            message:"status updated successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}