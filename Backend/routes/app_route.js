const express=require('express');
const router=express.Router();
const Patient=require('../models/app_model');
const{check, validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
// const { updateOne } = require('../models/user_model');

//Insertion/Registration of users
router.post('/patient/insert',[
    check('patientname','Username is required').not().isEmpty(),
    check('patient_contactno','Contact no is required').not().isEmpty(),
    check('patient_email','Email is required').not().isEmpty(),
    // check('user_email','Email invalid').isEmail(),
    // check('user_password','Password is required').not().isEmpty(),
],function(req,res){

    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        const patientname=req.body.patientname;
        const patient_contactno= req.body.patient_contactno;
        const patient_email=req.body.patient_email;
        const date=req.body.date;
        const gender=req.body.gender;
        const sysptoms=req.body.sysptoms;
        
        // bcryptjs.hash(user_password, 10, function(err, hash){
            const data=new Patient(
                {
                    patientname:patientname,
                    patient_contactno:patient_contactno,
                    patient_email:patient_email,
                    date:date,
                    gender:gender,
                    sysptoms:sysptoms,
                    
            }
            );
            data.save()
            .then(function(result){
                res.status(201).json({success:true,message : "Appoitment book Success!!"})
                
            })
            .catch(function(err){
                res.status(500).json({error : err})
            })
            // })
            }
        else{
            res.status(400).json(errors.array());
        }   
        })


//login system  .........
// router.post('/user/login', function(req, res){
//     const Username = req.body.user_email;
//     const Password = req.body.user_password;
//     User.findOne({user_email : Username})
//     .then(function(userData){
//         if(userData===null){
//             // username false
        
//           return res.status(201).json({success:false, message : "Invalid credentials!!"})
//         }
//         // if username exists
//         bcryptjs.compare(Password , userData.user_password, function(err, result){
           
//             if(result===false){
//                 //passsword Wrong\
//                 return res.status(201).json({success:false, message : "Invalid credentials!!"})
                
//             }
//             //all good
//             // then generate token - ticket
//            const token = jwt.sign({userID : userData._id}, 'anysecretkey');
//            return res.status(200).json({
//                success : true,
//                message : "All success!",
//                token : token,
//                usertype:userData.user_role,
//                userid:userData._id,
//                data  : [userData]
//            })
//         })

//     })
//     .catch(function(e){
//         res.status(500).json({message : e})
//     })

// })

//Retrieval of users
router.get('/user/show',function(req,res){
    User.find().then(function(data){
        res.send(data);
    })
})


//Deletion of users
// router.delete('/user/delete/:id', 
// auth.verifyUser,
// function(req,res){
//     const id22=req.params.id;
//     User.deleteOne({_id:id22}).then(function(){
//         res.send("deleted!!");
//     })

// })


//Android
// router.put('/user/update/',
// auth.verifyUser,
// function(req,res){
//     console.log(req.body)
//     const id=req.user._id;
//     User.findOneAndUpdate({_id:id},{$set : {...req.body}}).then(function(){
//         res.status(200).json({
//             message:"Success"
//         })
    
//     }).catch((error)=>{
//         res.status(404).json({
//             error:"error"
//         })
//     })
// })


//Update of users
// router.put('/user/update/:id',function(req,res){
//     const userId=req.params.id
//     const user_username = req.body.user_username
//     const user_email = req.body.user_email
//     const user_contactno = req.body.user_contactno
//     User.updateOne({_id:userId}
//         ,{user_username : user_username, user_email:user_email,user_contactno:user_contactno}
//         )
//     .then(function(success){
//         res.status(200).json({message:"Profile Updated"})
//     })
//     .catch(function(err){
//         res.status(500).json({error:err})
//     })   
// })


//Selected retrieval of users
// router.get('/user/singleshow/:id',
// auth.verifyUser,
// function(req,res){
//     const user_id = req.params.id;
//     User.findOne({_id:user_id})
//     .then(function(data){
//         res.status(200).json(data)
//     }).catch(function(e){
//         res.status(500).json({error : e})
//     })
// })

module.exports=router;
