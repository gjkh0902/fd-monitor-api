const mysql = require('mysql')
const mysqlConfig = require('./mysql')

exports.base = (sql, data, callback) => {
    const connection = mysql.createConnection(mysqlConfig)
    connection.connect()

    connection.query(sql, data, function(error, results, fields) {
        if (error) throw error
        callback(results)
    })
    connection.end()
}