//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql
const dateFormat = require('../utils/date') //date
const { resFormat, SucCodeEnum, ErrCodeEnum } = require('../config/baseConfig') //baseConfig

//list
// exports.list = (req, res) => {
//     //console.log('req.query', req.query)
//     const data = !!req.query ? req.query : {}

//     if (!!data.page && !!data.limit) {
//         const start = (data.page - 1) * data.limit //分页起始位置
//         const param = [parseInt(start), parseInt(data.limit)] //page是传过来的页数（page-1乘以10就是起始行）

//         db.base(dataSql.webError.queryOnPage, param, (result) => {
//             console.log(result[0][0].count)
//             console.log('result', result[1])

//             if (!!result[1] && !!result[1].length && result[0][0].count > 0) {
//                 result = { total: result[0][0].count, item: result[1] }
//             }
//             res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
//         })
//     } else {
//         res.json(resFormat(500, ErrCodeEnum.PAGE_ERROR, result))
//     }
// }

//add
exports.add = (req, res) => {
    const data = req.body

    console.log(data)
        // //参数
        // const param = {
        //     origin: req.headers.origin || '',
        //     referer: req.headers.referer || '',
        //     method: req.method || '',
        //     createTime: dateFormat.getNowTime(),
        //     category: data.category || '',
        //     logType: data.logType || '',
        //     resourceUrl: data.logInfo.url || '',
        //     msg: data.logInfo.msg || '',
        //     extendsInfo: data.extendsInfo || '',
        //     col: data.logInfo.col || '',
        //     line: data.logInfo.line || '',
        //     status: JSON.parse(data.logInfo.errorObj).status || '',
        //     errorObj: data.logInfo.errorObj || '',
        //     systemId: JSON.parse(data.extendsInfo).systemId || 0,
        //     deviceInfo: data.deviceInfo || '',
        // }
        // db.base(dataSql.webError.insert, param, (result) => {
        //     console.log(result)
        //     res.json(resFormat(200, SucCodeEnum.OPT_SUCCESS, result))
        // })
}