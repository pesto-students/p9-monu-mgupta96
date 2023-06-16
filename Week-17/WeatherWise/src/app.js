// Creates an Express application. 
const express = require("express")

// The app object conventionally denotes the Express application. 
// Create it by calling the top-level express() function exported by the Express module:
const app = express()
require('dotenv').config();

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('',require('./route/app.route'))
app.use('',require('./route/forecast.route'))
app.use('',require('./route/weather.route'))


app.listen(3000,()=>{
    console.log('app is running on port '+ 3000)
})