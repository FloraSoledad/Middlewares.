const router = require('express').Router();
const {index, music, about, contact} = require('../controllers/mainControllers')
router
    .get('/', index)
    .get('/music', music )
    .get('/about:/', about)
    .get('/contact', contact)



module.exports = router; 
