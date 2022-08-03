const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const mongoosePaginate  = require('mongoose-paginate-v2')

const materiaisSchema = new Schema({
    designacao: {
        type: String,
    },
    marca: {
        type: String,
    },
    referencia: {
        type: String,
    },

}, {timestamps: true})

materiaisSchema.plugin(mongoosePaginate)

const Materiais = mongoose.model('Materiais', materiaisSchema)
module.exports = Materiais