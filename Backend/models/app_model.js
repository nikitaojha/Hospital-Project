const mongoose=require('mongoose');

const Patient=mongoose.model('Patient',{
    patientname:{
        type : String,
        required : true
    },
    patient_contactno:{
        type:String,
        required : true
    },
    patient_email:{
        type:String,
        required : true
    },
    date:{
        type:String,
        required : true
    },
    gender:{
        type:String,
        required : true
    },
    sysptoms:{
        type:String,
        required : true
    },
    
})
module.exports=Patient;