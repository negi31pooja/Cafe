const database = require('../../configuration/database.config')

var signin = function(loginData){
    this.username = loginData.username,
    this.password = loginData.password
}

signin.checkUser = function(data,result){
    console.log(data)

    database.query("select count(*) AS res, username,password from Registration where username = ? and password =? ",
    data,(err,res)=>{
        if(err){
            result(null,{status:false,message:'Error while inserting data into registration table',data:err})
        }
        else{
            result(null,{status:true,message:'Data Entered Successfully',data:res})
        }
    })

}

module.exports = signin