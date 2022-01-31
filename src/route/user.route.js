const express = require('express')


const route = express.Router()

const user_controller = require('../controller/user.controller')

route.get("/user-list",user_controller.getUser_list);

// Update Data

route.put("/user-list",user_controller.editData);




// Delete user

route.delete("/user-list/:username",user_controller.deleteUser);


module.exports = route;