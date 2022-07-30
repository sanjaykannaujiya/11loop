const Sim=require('../model/Sim') 
const Joi = require("joi")
const jwt=require('jsonwebtoken')
exports.addsim=async(req,res)=>{
    try{
        let{serial,phone,seller,operator,providedBy,Date_added}=req.body
        const user = Joi.object({                                                     
            serial:Joi.string().required(),
            phone:Joi.string().required(),
            seller:Joi.string().required(),
            operator: Joi.string().required(),
            providedBy: Joi.string().required(),
            Date_added:Joi.string().required(),
           })
           let result =user.validate(req.body)
           if(result.error){
               res.status(400).json(result.error.details[0].message)
               return ;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
           }else{
             const exist = await Sim.exists({phone:req.body.phone});
             if(exist){
                 return  res.status(400).json("This is sim ");
             
             }else{
               
              const alluser=new Sim({
                serial,phone,seller,operator,providedBy,Date_added
              })
             const saveuser =await alluser.save();
             res.status(200).json({message:"sim is save",saveuser}) 
           } 
             
         }
             
         }catch(err){
             res.status(500).json(err)
             console.log(err)
         }
     }
     exports.allsim=async(req,res)=>{ 
            try{
                //pageination
            const {page ,limit} = req.query
            const skip = (page-1)*10
            const allfind= await Sim.find().skip(skip).limit(limit)
             res.status(200).json({message:"this is sim",allfind})
         }catch(error){
             res.status(500).json(error)
             console.log(error)
         }
     }
     exports.updatsim=async(req,res)=>{
         try{
             const putuser=await Sim.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
             res.status(200).json({massage:"this is sim",putuser})
         }catch(error){
             res.status(500).json(error)
         }
       }
     exports.deletesim=async(req,res)=>{
         try{
             const deltuser= await Sim.findByIdAndDelete(req.params.id)
             res.status(200).json({massage:"this is  sim"})
      }catch(error){
             res.status(500).json(error)
         }
     }
