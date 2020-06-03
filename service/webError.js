//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql

const utils = require('../utils/date') //util

//list
exports.list = (req, res) => {
    db.base(dataSql.webError.queryAll, null, (result) => {
        res.render('webError/list', { list: JSON.stringify(result) })
    })
}

//add
exports.add = (req, res) => {
    console.log('req1111', req.body, req.method, req.headers.origin, req.headers.referer)
    const data = req.body

    //参数
    const param = {
        origin: req.headers.origin || '',
        referer: req.headers.referer || '',
        method: req.method || '',
        createTime: utils.getNowTime(),
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
    console.log(param)

    db.base(dataSql.webError.insert, param, (result) => {
        res.json({ code: 200, message: 'success', data: result })
    })
}