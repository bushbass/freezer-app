const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateOnBag: String
})

module.exports = mongoose.model('Item', itemSchema)