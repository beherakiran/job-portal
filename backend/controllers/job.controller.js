import {Job} from "../models/job.model.js"
           //admin
export const postJob = async(req,res)=>{
    try {
        const {title,description,requirements,salary,location,jobType,experience,position,companyid} = req.body;
        const userId = req.id;
        if(!title ||! description || !requirements || !salary || !location || !jobType || !experience || !position || !companyid){
           return res.status(400).json({
            message:"something is missing",
            success:false
           })
        };
      const job = await Job.create({
            title,
            description,
            requirements: Array.isArray(requirements)? requirements: requirements.split(","),
            salary:Number(salary) || 0,
            location,
            jobType,
            experienceLevel:experience,
            position,
            company:companyid,
            created_by:userId
        });
    return res.status(200).json({
        message:"New Job created Successfully",
        job,
        success:true
    })
    } catch (error) {
        console.log(error);
    }
}
      //student
export const getAllJobs = async(req,res)=>{
    try {
        const keyword = req.query.keyword?.trim() || "" ;
        const query = {
            $or:[
                  {title:{$regex:keyword,$options:"i"}},
                  {description:{$regex:keyword,$options:"i"}},
            ]
        };
        const jobs = await Job.find(query);
        if(jobs.length === 0){
           return res.status(404).json({
            message:"Job not found",
            success:false
           }) 
        };
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
     }
}
//student
export const getJobById = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(job.length === 0){
              return res.status(404).json({
            message:"Job not found",
            success:false
           }) 
        };
         return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

//no.of job that admin created
export const getAdminJobs = async (req,res) =>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
      if(!jobs){
         return res.status(404).json({
            message:"Job not found",
            success:false
           }) 
      }
       return res.status(200).json({
            jobs,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}

