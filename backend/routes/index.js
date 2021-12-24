const routerUsers = require('./users');
const routerSellers= require('./sellers');

function RouterAPI(app){
    app.use('/users', routerUsers);
    app.use('/sellers', routerSellers);
}

module.exports = RouterAPI;