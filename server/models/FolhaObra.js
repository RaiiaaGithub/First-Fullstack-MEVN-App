const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const mongoosePaginate  = require('mongoose-paginate-v2')

// SCHEMAS
const { veiculoSchema } = require('./Veiculo')

const folhaObraSchema = new Schema({
    veiculo: {
        type: veiculoSchema,
    },
    servico_feito: {
        type: [String],
    },
    materiais: {
        type: [String],
    },
    servico_por_fazer: {
        type: [String],
    },
    kms: {
        type: Number
    },
    data: {
        type: Date,
    }

}, {timestamps: true})

folhaObraSchema.plugin(mongoosePaginate)

const FolhaObra = mongoose.model('FolhaObra', folhaObraSchema)
module.exports = FolhaObra