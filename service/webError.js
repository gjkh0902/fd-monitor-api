//const path = require('path')
const db = require('../db/db')
const dataSql = require('../db/dataSql') //sql

//list
exports.showList = (req, res) => {
    db.base(dataSql.webError.queryAll, null, (result) => {
        res.render('webError/list', { list: JSON.stringify(result) })
    })
}

//add
exports.addError = (req, res) => {
    db.base(dataSql.webError.insert, null, (result) => {
        res.json({ code: 200, message: 'success', data: result })
    })
}