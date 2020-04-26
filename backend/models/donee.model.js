const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doneeSchema = new Schema({
    name: String,
    donations: Number,
    needed: Number,
    img_url: String,
    description: String
}, {
	timestamps: true,
});


const Donee = mongoose.model('Donee', doneeSchema);

module.exports = Donee;