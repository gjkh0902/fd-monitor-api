const mysql = require('mysql')
const mysqlConfig = require('./mysql')

exports.base = (sql, data, callback) => {
    const connection = mysql.createConnection(mysqlConfig)
    connection.connect()

    connection.query({
            sql: sql,
            values: data,
            timeout: 10000, //响应超时设置，10s
        },
        function(error, results, fields) {
            if (error) {
                if (error.code === 'PROTOCOL_SEQUENCE_TIMEOUT') console.log('接口处理超时')
                throw error
            }
            callback(results)
        }
    )
    connection.end()
}