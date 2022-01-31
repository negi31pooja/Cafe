var database = require('../../configuration/database.config')

var user = function (data) {
    this.username = data.username;
    this.contact = data.contact;
    this.address = data.address;
    this.address2 = data.address2;
}

user.getUser_list = (result) => {
    database.query(
        'select username,contact,address,address2 from Registration', (err, res) => {
            if (err) {
                console.log("error while fetching user data", err)
                result(null, err)
            }
            else {

                result(null, res)
            }
        }
    )
}

// Update Data
user.editData = (data,result) => {


    // console.log(result)
    database.query('update Registration set contact=?,address=?,address2=? where username=?',
        data,(err, res) => {
            if (err) {
                result(null, err)
            }
            else {
                result(null, res)
            }
        })
}



// // Delete User
user.deleteUser = (username,result) =>{
    database.query('delete from Registration where username=?',
    username, (err,res) => {
        if(err){
            result(null,err)
        }
        else{
            result(null,res)
        }
    })
}

module.exports = user
