//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql
const dateFormat = require('../utils/date') //date
const crudJson = require('../db/crudJson') //crudJson

//list
exports.list = (req, res) => {
    console.log('req.body111', req.body)

    //参数
    const param = {}
    db.base(dataSql.webError.queryAll, param, (result) => {
        console.log(result)
        res.json(crudJson('select', result))
    })
}

//add
exports.add = (req, res) => {
    const data = req.body

    //参数
    const param = {
        origin: req.headers.origin || '',
        referer: req.headers.referer || '',
        method: req.method || '',
        createTime: dateFormat.getNowTime(),
        category: data.category || '',
        logType: data.logType || '',
        resourceUrl: data.logInfo.url || '',
        msg: data.logInfo.msg || '',
        extendsInfo: data.extendsInfo || '',
        col: data.logInfo.col || '',
        line: data.logInfo.line || '',
        errorObj: data.logInfo.errorObj || '',
        deviceInfo: data.deviceInfo || '',
    }

    db.base(dataSql.webError.insert, param, (result) => {
        console.log(result)
        res.json(crudJson('add', result))
    })
}