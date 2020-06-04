module.exports = {
    /**
     * 对象是否为空
     * @param {*} obj
     */
    objectIsNull(obj) {
        return JSON.stringify(obj) === '{}'
    },
}