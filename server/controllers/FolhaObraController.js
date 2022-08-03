const FolhaObra = require('../models/FolhaObra')

//Show list
const index = (req, res, next) => {
  if(req.query.page) {
    FolhaObra.paginate({}, {page: req.query.page, limit: req.query.limit || 10})
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(error => {
        res.status(400).json({
          message: 'Ocurreu um erro!' + error
        })
      })
  } else {
    FolhaObra.find()
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(error => {
        res.status(400).json({
          message: 'Ocurreu um erro!' + error
        })
      })
  }
}

//Show one
const show = (req, res, next) => {
  let _id = req.body._id
  FolhaObra.findById(_id)
    .then(data => {
      res.status(200).json({
        data
      })
    })
    .catch(error => {
      res.status(400).json({
        message: 'Ocurreu um erro!' + error
      })
    })
}

//Add
const add = (req, res, next) => {
  let folhaObra = new FolhaObra({
    veiculo: req.body.veiculo,
    servico_feito: req.body.servico_feito,
    materiais: req.body.materiais,
    servico_por_fazer: req.body.servico_por_fazer,
    kms: req.body.kms,
    data: req.body.data,
  })
  folhaObra.save()
    .then(data => {
      res.status(200).json({
        message: 'Adicionado com sucesso!'
      })
    })
    .catch(error => {
      res.status(400).json({
        message: 'Ocurreu um erro!' + error
      })
    })
}


//Update


//Delete


module.exports = { index, show, add }