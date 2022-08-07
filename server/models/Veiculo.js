const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const mongoosePaginate  = require('mongoose-paginate-v2')

const veiculoSchema = new Schema({
    matricula: {
        type: String,
        required: true,
        unique: true,
        dropdDups: true,
    },
    marca: {
        type: String,
    },
    modelo: {
        type: String,
    },
    cor: {
        type: String
    }


}, {timestamps: true})

veiculoSchema.plugin(mongoosePaginate)

const Veiculo = mongoose.model('Veiculo', veiculoSchema)
module.exports = { Veiculo, veiculoSchema }