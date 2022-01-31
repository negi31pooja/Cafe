const express = require('express')

const route = express.Router()

const login_controller = require('../controller/login.controller')
// Check Login Details

route.post("/login",login_controller.checkUser)

module.exports = route

