//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql

//list
exports.list = (req, res) => {
    db.base(dataSql.webError.queryAll, null, (result) => {
        res.render('webError/list', { list: JSON.stringify(result) })
    })
}