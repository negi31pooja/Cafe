const express = require('express')

const route = express.Router()

const registration_controller = require('../controller/signup.controller')

route.post("/registration",registration_controller.registrationForm)



module.exports = route