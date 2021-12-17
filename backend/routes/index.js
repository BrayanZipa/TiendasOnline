const routerUsers = require('./users');
const routerMockUsers = require('./mockUsers');

function RouterAPI(app){
    app.use('/users', routerUsers);
    app.use('/mock/users', routerMockUsers);
}

module.exports = RouterAPI;