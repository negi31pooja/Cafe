// import express for API creation
const express = require('express')

const cors = require('cors')

// import body-parser for post method
const bodyParser = require('body-parser')

// Port Setting
const port = process.env['PORT'] || 5000

// Call express
const app1 = express();

//  Call body-parser
app1.use(bodyParser.urlencoded({extended:true}))
app1.use(bodyParser.json())
app1.get("/",(req,res) => {
  res.send("Express app is working")
})

// cor policy configuration
var corOption = {
    origin: "*",
    optionsSuccessStatuse: 200
}

app1.use(cors(corOption))


// Import route from route files

const signup_route = require('./src/route/signup.route')
app1.use("/app1/api", signup_route)

// import login route
const login_route = require('./src/route/login.route')
app1.use("/app1/api", login_route)

// import user route
const user_route = require('./src/route/user.route')
app1.use("/app1/api",user_route)



// working of port
app1.listen(port, () => {
  console.log(`API is working at port ${port}`)
})





