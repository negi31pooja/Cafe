
const user_model = require('../model/user.model')

exports.getUser_list = (req, res) => {
    console.log("This is user controller")

    user_model.getUser_list((err, result) => {

        console.log("We have got the user list")
        if (err) {
            res.send(err)
        }
        else {
            console.log("response works properly", result)
            res.send(result)
        }

    }
    )
}

// Update Data
exports.editData = (req, res) => {
    var username = req.params.username;
    var contact = req.params.contact;
    var address = req.params.address;
    var address2 = req.params.address2;

    const updateData = [username,contact, address, address2]

    user_model.editData(updateData, (err, result) => {
        if (err) {
            console.log("There is some error in updating error")
            res.send(err)
        }
        else {
            console.log("Data updated succesfully")
            res.send(result)
        }
    })
}

// To Delete user Data
exports.deleteUser = (req,res) => {
    console.log("hello we are here")
    var username = req.params.username;

    user_model.deleteUser(username, (err,result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}