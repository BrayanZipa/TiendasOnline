const routerUsers = require('./users');

function RouterAPI(app){
    app.use('/users', routerUsers);
}

module.exports = RouterAPI;