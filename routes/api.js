const express = require('express')
const api = express.Router()

const webErrorApi = require('../service/webErrorApi') // error
const webUserApi = require('../service/webUserApi') // user

//webError
api.post('/addError', webErrorApi.add)
api.get('/listError', webErrorApi.list)

//webUser
api.post('/addUser', webUserApi.add)
api.post('/userLogin', webUserApi.login)
api.get('/userInfo', webUserApi.info)
api.post('/userLogout', webUserApi.logout)

module.exports = api