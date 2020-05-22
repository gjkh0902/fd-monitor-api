const express = require('express')
const router = express.Router()

const webError = require('../service/webError')

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' })
})

//webErrorList
router.get('/webErrorList', webError.showList)

//test
router.get('/api/test', (req, res) => {
    res.json({ code: 200, message: 'success', data: { text: 1 } })
})

module.exports = router