const express = require('express')

const FerretController = require('../controllers/ferret-controller')

const router = express.Router()

router.post('/ferret', FerretController.createFerret)
router.put('/ferret/:id', FerretController.updateFerret)
router.delete('/ferret/:id', FerretController.deleteFerret)
router.get('/ferret/:id', FerretController.getFerretById)
router.get('/ferrets', FerretController.getFerrets)

module.exports = router