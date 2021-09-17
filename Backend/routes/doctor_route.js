const express=require('express');
const router=express.Router();
const Doctor=require('../models/doctor_model');
const{check, validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const upload = require('../middleware/fileupload')


//Insertion
router.post('/doctor/insert', 
auth.verifyUser, 
auth.verifyAdmin,
upload.single('doctor_img'),[
    check('doctorname','doctorname is required').not().isEmpty(),
    check('department','department is required').not().isEmpty(),
    // check('product_img','Image is required').not().isEmpty(),
],function(req,res){
    if(req.file==undefined){
        return res.status(400).json({
            message: "Invalid file format" 
        })
    }
    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        const doctorname =req.body.doctorname;
        const department= req.body.department;
        const desc=req.body.desc;
        const Education=req.body.Education;
        const path = req.file.path;
        const doctor=new Doctor(
        {
            doctorname: doctorname,
            department: department,
            desc:desc,
            Education:Education,
            doctor_img:path

        });
    doctor.save()
    .then(function(result){
        res.status(201).json({message : " Registered Successfully!!"})
    
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })
    }
else{
   // res.send(errors.array())
    res.status(400).json(errors.array());
}   
})


//Update 
router.put('/update/:id', 
auth.verifyUser, auth.verifyAdmin,
function(req,res){
    const doctorname = req.body.doctorname
    const department = req.body.department
    const desc = req.body.desc
    const Education = req.body.Education
    const doctor_id = req.params.id


    Doctor.updateOne({_id : doctor_id},
        {doctorname:doctorname, department:department, desc:desc, Education:Education }
        )
        .then(function(){
            res.status(200).json({message:"Updated"})
        })
        .catch(function(e){
            res.status(500).json({error:e})
        })
})


//Deletion 
router.delete('/delete/:id',
auth.verifyUser, auth.verifyAdmin,
   function(req,res){
    const id = req.params.id;
    Doctor.deleteOne({_id:id})
    .then(function(){
        res.send("deleted!!");
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})



//Retrieval 
router.get('/doctor/show',function(req,res){
    Doctor.find()
    .then(function(data){
        res.json({
            success : true,
            data  : data
        })
    })
})


//Selected retrieval of products
router.get('/singleshow/:id',
//auth.verifyUser,
function(req,res){
    const doctor_id = req.params.id;
    Product.findOne({_id:doctor_id})
    .then(function(data){
        res.status(200).json(
            data
        //Android
        //     {
        //     success:true,data:data
        // }
        )
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

module.exports=router;