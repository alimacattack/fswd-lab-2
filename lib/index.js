
'use strict';

// load our server module
var server = require('./server');

// tell the server to listen on a specific port
server.listen(8000, function() {
    console.log('Server listening on port 8000!');
});
