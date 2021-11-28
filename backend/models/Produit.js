const mongoose = require('mongoose')
const moment = require('moment-timezone')
const Schema = mongoose.Schema

const produitSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    addedAt: {
        type: Date,
        default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    image:{
        type: String
    }
})

module.exports = mongoose.model('produit', produitSchema)