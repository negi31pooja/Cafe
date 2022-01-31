const register = require('../model/signup.model')
const registration_model = require('../model/signup.model')

exports.registrationForm = (req,res) => {
    const registration = new registration_model(req.body)
    console.log(req.body)

    registration_model.registrationForm(registration,(err,result) => {
        console.log(result)
        if(result.status==false){
            res.json({status:false,message:'Error occured while user creation',data:err})
        }
        else{
            res.send({status:true,message:'User Registered Successfully',data:result})
        }
    })
}

