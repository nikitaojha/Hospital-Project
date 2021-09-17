const mongoose = require('mongoose');

const Doctor = mongoose.model('Doctor', {
doctorname : {
    type : String
},
department : {
    type : String
},
desc : {
    type : Number
},
doctor_img : {
    type : String
},
Education : {
    type : String 
},
})


module.exports = Doctor;