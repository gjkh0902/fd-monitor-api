const express = require('express')
const api = express.Router()

const webErrorApi = require('../service/webErrorApi') // error
const webUserApi = require('../service/webUserApi') // user
const webPagesApi = require('../service/webPagesApi') // pages
const webSystemApi = require('../service/webSystemApi') // system

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

//webSyetem
api.post('/addSystem', webSystemApi.add)

module.exports = api