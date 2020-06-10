//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql
const dateFormat = require('../utils/date') //date
const { resFormat, SucCodeEnum, ErrCodeEnum } = require('../config/baseConfig') //baseConfig

//login
exports.login = (req, res) => {
    let param = !!req.body ? req.body : {} // 参数
    param = Object.values(param).flat()

    db.base(dataSql.webUser.queryLogin, param, (result) => {
        if (!!result && !!result.length) {
            res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
        } else {
            res.json(resFormat(501, ErrCodeEnum.LOGIN_UP_ERROR, result))
        }
    })
}

//info
exports.info = (req, res) => {
    let param = !!req.query ? req.query : {}
    param = Object.values(param)

    //console.log('1111', param)

    db.base(dataSql.webUser.queryByToken, param, (result) => {
        res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
    })
}

//logout
exports.logout = (req, res) => {
    let result = {}
    res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
}

//add
exports.add = (req, res) => {}