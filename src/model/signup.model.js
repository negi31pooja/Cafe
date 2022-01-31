const database = require('../../configuration/database.config')


var register = function(details){
    this.username = details.username;
    this.contact = details.contact;
    this.address = details.address;
    this.address2 = details.address2;
    this.password = details.password;
    this.re_enter_password = details.re_password;
}

register.registrationForm = function(registration,result){
    console.log(registration)
    database.query('insert into registration set ?',
    registration,(err,res)=>{
        if(err){
            result(null,{status:false,message:'Error while inserting data into registration table',data:err})
        }
        else{
            result(null,{status:true,message:'User Logged in Successfully',data:res})
        }
    })
}

module.exports = register