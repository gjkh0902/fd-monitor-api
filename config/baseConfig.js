//res通用格式
const resFormat = (code, msg, result) => {
    return {
        code: code || 000,
        msg: msg || '',
        data: result || [],
    }
}

/**
 * code 成功类型枚举
 */
const SucCodeEnum = {
    //通用操作成功提示
    OPT_SUCCESS: '操作成功',
}

/**
 * code 错误类型枚举
 */
const ErrCodeEnum = {
    //通用操作失败提示
    OPT_ERROR: '操作失败',

    //登陆用户名或密码错误
    LOGIN_UP_ERROR: '登陆用户名或密码错误',

    //WEBERROR监控上报失败
    WEBERROR_ERROR: '错误监控数据上报失败',

    //分页查询失败
    PAGE_ERROR: '分页数据查询失败，请检查参数',
}

module.exports = {
    SucCodeEnum,
    ErrCodeEnum,
    resFormat,
}