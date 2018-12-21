const ghost = require('ghost');

ghost()
    .then(function (ghostServer) {
        var serverConfig = ghostServer.config.get('server');
        ghostServer.config.set('server', { 
            host: serverConfig.host, 
            port: process.env.PORT || serverConfig.port
        });
        return ghostServer.start();
    })