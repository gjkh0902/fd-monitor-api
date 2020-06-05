//const utils = require('../utils/index') //util

//response返回格式
const resFormat = (code, msg, result) => {
    return {
        code: code || '0000',
        msg: msg || '',
        data: result || '',
    }
}

//CRUD操作
const crudJson = (type, result) => {
    switch (type) {
        case 'add': //插入数据
            if (!!result && !!result.insertId) {
                return resFormat(200, '操作成功', result)
            } else {
                return resFormat(500, '新增数据失败', '')
            }
            break
        case 'select': //查询数据
            if (!!result.length) {
                if (result.length > 0) {
                    return resFormat(200, '查询成功', result)
                } else {
                    return resFormat(200, '没有查到相关数据！', '')
                }
            } else {
                return resFormat(500, '查询失败', '')
            }
            break
        case 'del': //删除数据
            if (!!result && !!result.affectedRows) {
                return resFormat(200, '删除成功', result)
            } else {
                return resFormat(500, '删除失败', '')
            }
            break
        case 'update': //更新数据
            if (!!result && !!result.changedRows) {
                return resFormat(200, '更新成功', result)
            } else {
                return resFormat(500, '更新失败', '')
            }
            break
        default:
            return resFormat(500, '操作无效～', '')
            break
    }
}

module.exports = crudJson