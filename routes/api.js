const express = require('express')
const api = express.Router()

const webErrorApi = require('../service/webErrorApi') // error
const webUserApi = require('../service/webUserApi') // user
const webPagesApi = require('../service/webPagesApi') // pages

//webError
api.post('/addError', webErrorApi.add)
api.get('/listError', webErrorApi.list)

//webUser
api.post('/addUser', webUserApi.add)
api.post('/userLogin', webUserApi.login)
api.get('/userInfo', webUserApi.info)
api.post('/userLogout', webUserApi.logout)

//webPages
api.post('/addPages', webPagesApi.add)

module.exports = api