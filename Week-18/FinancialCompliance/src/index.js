require('dotenv').config()
const express = require('express')
const {dbConnect} = require('../config/db')
const bodyParser = require('body-parser')

const { Auth, User } = require('./models/Auth.model')
const { FixedDeposit } = require('./models/Investment.model')
const investmentController = require('./controllers/investment.controller')

const app = express()
dbConnect()
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send("App started"))

app.post('/signup', async(req, res) => {
    const authData = req.body
    console.log(authData);
    const existingUsername = await Auth.findOne({'username': authData.username})
    const existingEmail = await Auth.findOne({'email': authData.email})
    if (existingEmail === null || existingUsername === null){
        const success = await Auth.create(req.body)
        res.status(200).json(success)
    }
    else{
        res.status(200).send("Already have account, please log in")
    }
})

app.post('/signin', async(req, res) => {
    const authData = req.body
    console.log(authData);
    const existingUsername = await Auth.findOne({'username': authData.username})
    const existingEmail = await Auth.findOne({'email': authData.email})
    if (existingEmail !== null && existingUsername !== null){
        const success = await Auth.findOneAndUpdate({'username': authData.username, 'email': authData.email}, {'lastLoggedIn': Date.now})
        res.status(200).json(success)
    }
    else{
        res.status(200).send("Don't have account, please sign up")
    }
})

app.get('/auth-details', async(req, res) => {
    const success = await Auth.find()
    res.status(200).json(success)
})

app.post('/user-details', async(req, res) => {
    const success = await User.create(req.body)
    res.status(200).json(success)
})
app.get('/user-details', async(req, res) => {
    const data = await User.find().populate('user_detail')
    res.status(200).json(data)
})
app.get('/user-details/:id', async(req, res) => {
    const success = await User.findById(req.params.id).populate('user_detail')
    res.status(200).json(success)
})

app.put('/user-details/:id', async(req, res) => {
    const success = await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(success)
})
app.delete('/user-details/:id', async(req, res) => {
    const success = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(success)
})

app.get('/fd', async(req, res) => {
    const success = await FixedDeposit.find().populate('user')
    res.status(200).json(success)
})

app.post('/fd', async(req, res) => {
    const success = await FixedDeposit.create(req.body)
    res.status(200).json(success)
})
app.delete('/fd/:id', async(req, res) => {
    const success = await FixedDeposit.findByIdAndDelete(req.params.id)
    res.status(200).json(success)
})
app.get('/investment-details', investmentController.getInvestmentDetails)

app.listen('3005', () => console.log("App started 🚀"))