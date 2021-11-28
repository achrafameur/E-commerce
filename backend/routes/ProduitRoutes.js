const router = require('express').Router()
const produitController = require('../controllers/produitController')

router.post('/addProduct',produitController.addProduit)
router.delete('/deleteProduct/:id',produitController.deleteProduit)
router.delete('/deleteElement/:id',produitController.delElement)
router.put('/updateProduct/:id',produitController.updateProduit)
router.get('/getAllProducts',produitController.getAllProduits)
router.get('/productCount',produitController.getProduitsCount)

module.exports = router