const express               = require('express')
const router                = express.Router()

const VeiculoController     = require('../controllers/VeiculoController')
const authenticate          = require('../middleware/authenticate')

router.get('/', authenticate, VeiculoController.index)
router.post('/show', authenticate, VeiculoController.show)
router.post('/add', authenticate, VeiculoController.add)
router.post('/update', authenticate, VeiculoController.update)
router.post('/delete', authenticate, VeiculoController.destroy)

module.exports = router