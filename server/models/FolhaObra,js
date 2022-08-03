const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const mongoosePaginate  = require('mongoose-paginate-v2')

const folhaObraSchema = new Schema({
    veiculo: {
        type: Schema.Types.ObjectId,
        ref: 'Veiculo',
    },
    servico_feito: {
        type: [String],
    },
    materiais: {
        type: Schema.Types.ObjectId,
        ref: 'Materiais',
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