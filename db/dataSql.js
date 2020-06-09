/*
     SQL语句封裝
*/

//web_error
const webError = {
    insert: 'INSERT INTO web_error set ?',
    update: 'UPDATE web_error SET ? WHERE id=?',
    delete: 'DELETE FROM web_error WHERE id=?',
    queryById: 'SELECT * FROM web_error WHERE id=?',
    queryAll: 'SELECT * FROM web_error',
}

//web_user
const webUser = {
    insert: 'INSERT INTO web_user set ?',
    queryById: 'SELECT * FROM web_user WHERE id=?',
    queryAll: 'SELECT * FROM web_user',
    queryLogin: 'SELECT * FROM web_user where userName=? and passWord=?',
}

//web_pages
const webPages = {
    queryAll: 'SELECT * FROM web_pages',
}

module.exports = {
    webError,
    webUser,
    webPages,
}