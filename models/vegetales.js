const mongoose = require('mongoose')

//make a schema
const vegetaleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})


//make a modal from the schema

const vegetale = mongoose.model('Vegetale', fruitSchema)

//export the modal for use in the app
module.exports = vegetale