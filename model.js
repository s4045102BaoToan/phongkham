const mongoose = require("mongoose");

//dich vu model
const dichvuSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    class: {type: String}
});
const Dichvu = mongoose.model('Dichvu', dichvuSchema);
module.exports = { Dichvu };