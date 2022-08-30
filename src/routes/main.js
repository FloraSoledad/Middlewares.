const router = require('express').Router();
const { index, music, about, contact, admin, login } = require('../controllers/mainControllers');

const accessAdmin = require('../middlewares/accessAdmin');

router
    .get('/', index)
    .get('/music', music )
    .get('/about', about)
    .get('/contact', contact)
    .get('/admin', accessAdmin,admin)
    .get('/login', login)



module.exports = router; 
