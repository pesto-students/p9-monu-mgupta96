const mongoose = require('mongoose')
const moment = require('moment');
const Schema = mongoose.Schema


const FixedDepositSchema = new Schema({
    user : {
        type: Schema.Types.ObjectId, 
        ref: 'Auth'
    },
    deposit_amount: Number,
    tenure: Number,
    interest: Number,
    created_date: {
        type: Date,
        default: moment().format('L')
    },
    maturity_date: {
        type: Date,
    },
    maturity_amount: {
        type: Number,
    },
})

const CorporateBondSchema = new Schema({
    user : {
        type: Schema.Types.ObjectId, 
        ref: 'Auth'
    },
    deposit_amount: Number,
    tenure: Number,
    interest: Number,
    created_date: {
        type: Date,
        default: moment().format('L')
    },
    maturity_date: {
        type: Date,
    },
    maturity_amount: {
        type: Number,
    },
})



// Calculate the maturity date and amount before saving the document
FixedDepositSchema.pre('save', function (next) {
    this.maturity_date = moment().add(this.tenure, 'years').calendar();
    const maturity_amount = this.deposit_amount + (this.deposit_amount * this.tenure * (this.interest/100))
    this.maturity_amount = maturity_amount;

    next();
});

// Calculate the maturity date and amount before saving the document
CorporateBondSchema.pre('save', function (next) {
    this.maturity_date = moment().add(this.tenure, 'years').calendar();
    const maturity_amount = this.deposit_amount + (this.deposit_amount * this.tenure * (this.interest/100))
    this.maturity_amount = maturity_amount;

    next();
});

const FixedDeposit = mongoose.model("FixedDeposit", FixedDepositSchema)
const CorporateBond = mongoose.model("CorporateBond", CorporateBondSchema)

// FixedDepositSchema.virtual('maturityDate').get(function() {
//     const maturityDate = new Date(this.startDate);
//     maturityDate.setMonth(maturityDate.getMonth() + this.tenure);
//     return maturityDate;
//   });
  
//   FixedDepositSchema.virtual('maturityAmount').get(function() {
//     const interestRate = 0.08; // Assuming an interest rate of 8%
//     const maturityAmount = this.amount + (this.amount * interestRate * this.tenure);
//     return maturityAmount;
//   });
module.exports = { FixedDeposit, CorporateBond }