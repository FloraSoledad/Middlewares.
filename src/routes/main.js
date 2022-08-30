const router = require('express').Router();
const {index, music, about, contact, admin} = require('../controllers/mainControllers')
router
    .get('/', index)
    .get('/music', music )
    .get('/about', about)
    .get('/contact', contact)
    .get('/admin', admin)



module.exports = router; 
