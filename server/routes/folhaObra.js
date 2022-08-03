const express               = require('express')
const router                = express.Router()

const FolhaObraController    = require('../controllers/FolhaObraController')
const authenticate          = require('../middleware/authenticate')

router.get('/', authenticate, FolhaObraController.index)
router.post('/show', authenticate, FolhaObraController.show)
router.post('/add', authenticate, FolhaObraController.add)

module.exports = router