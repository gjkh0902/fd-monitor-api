const express = require('express')
const api = express.Router()

const webErrorApi = require('../service/webErrorApi')

//webError
api.post('/addError', webErrorApi.add)
api.get('/listError', webErrorApi.list)

module.exports = api