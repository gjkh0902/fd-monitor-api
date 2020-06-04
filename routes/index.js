const express = require('express')
const router = express.Router()

const webError = require('../service/webError')

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' })
})

//webError
router.get('/webError', webError.list)

module.exports = router