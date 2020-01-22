const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ferret = new Schema ({
	name: { type: String, required: true },
	age: String,
	breed: String,
	litter: String,
})

module.exports = mongoose.model('ferrets', Ferret)