const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

//Authentication for user regardless of role
module.exports.verifyUser = function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1]
        const data = jwt.verify(token, 'anysecretkey');
        //in this data id is available
        User.findOne({_id : data.userID})
        .then(function(userData){
            req.user = userData
            next()
        })
        .catch(function(e){
            res.status(401).json({error : e})
            
        })  
    }
    catch(e){
        res.status(401).json({error : e})
        
    }    
}
//1. get token from client
//2. verify the token
//3. false- return with error msg
//4. true- get id from token
//5. fetch all the info from db using the id


// Authentication of Admins
module.exports.verifyAdmin = function(req,res,next){
    if(!req.user){
        return res.status(401).json({message : "Unauthorized(Not logged in)"})
    }
    else if(req.user.user_role != "Admin"){
        return res.status(401).json({message : "Unauthorized(Not Admin)"})
    }
    next()
}