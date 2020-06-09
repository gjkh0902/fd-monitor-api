//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql
const dateFormat = require('../utils/date') //date
const crudJson = require('../db/crudJson') //crudJson

//login
exports.login = (req, res) => {
    // //参数
    let param = !!req.body ? req.body : {}
    param = Object.values(param).flat()
    console.log(param)

    db.base(dataSql.webUser.queryLogin, param, (result) => {
        console.log('result', result)
        res.json(crudJson('select', result))
    })
}

//info
exports.info = (req, res) => {
    let param = !!req.body ? req.body : {}
    console.log(param, req.body)
}

//logout
exports.logout = (req, res) => {}

//add
exports.add = (req, res) => {}