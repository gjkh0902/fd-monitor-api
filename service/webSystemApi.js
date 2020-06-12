//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql
const dateFormat = require('../utils/date') //date
const { resFormat, SucCodeEnum, ErrCodeEnum } = require('../config/baseConfig') //baseConfig
const jwt = require('jsonwebtoken')

//list
exports.list = (req, res) => {
    const data = !!req.query ? req.query : {}

    if (!!data.page && !!data.limit) {
        const start = (data.page - 1) * data.limit //分页起始位置
        const param = [parseInt(start), parseInt(data.limit)] //page是传过来的页数（page-1乘以10就是起始行）

        db.base(dataSql.webSystem.queryOnPage, param, (result) => {
            console.log(result[0][0].count)
            console.log('result', result[1])

            if (!!result[1] && !!result[1].length && result[0][0].count > 0) {
                result = { total: result[0][0].count, item: result[1] }
            }
            res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
        })
    } else {
        res.json(resFormat(500, ErrCodeEnum.PAGE_ERROR, ''))
    }
}

//add
exports.add = (req, res) => {
    const data = req.body
    console.log('req.query', data)

    let payload = { name: data.name, domain: data.domain, createTime: dateFormat.getNowTime() }
    let secret = 'SYS_APPID' //自定义
    let appId = jwt.sign(payload, secret, {
        //expiresIn: 60 * 60 * 1, // 1小时过期
    })

    // //参数
    const param = {
        createTime: dateFormat.getNowTime(),
        name: data.name || '',
        domain: data.domain || '',
        slowPageTime: parseInt(data.slowPageTime),
        slowJsTime: parseInt(data.slowJsTime),
        slowCssTime: parseInt(data.slowCssTime),
        slowImgTime: parseInt(data.slowImgTime),
        slowAajxTime: parseInt(data.slowAajxTime),
        appId: appId || '',
        userId: data.userId || '',
    }
    console.log(param)

    db.base(dataSql.webSystem.insert, param, (result) => {
        console.log(result)
        res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
    })
}