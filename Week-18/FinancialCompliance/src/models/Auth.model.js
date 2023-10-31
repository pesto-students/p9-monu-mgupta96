const mongoose = require('mongoose');
const Schema = mongoose.Schema


const AuthenticationSchema = new Schema({
    username: String,
    email: String,
    password: String,
    lastLoggedIn: {
        type: Date,
        default: Date.now
    }
})

const UserDetail = new Schema({
    user_detail : {
        type: Schema.Types.ObjectId, 
        ref: 'Auth'
    },
    income_source: {
        type: String,
        enums: ['salaried', 'self-employed']
    },
    income: Number,
    expense: Number,
    saving: {
        type: Number,
        default: function(){
            return this.income - this.expense
        }
    }
})


const Auth = mongoose.model('Auth', AuthenticationSchema)
const User = mongoose.model('User', UserDetail)

module.exports = { Auth, User }