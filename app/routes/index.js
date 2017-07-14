'use strict';

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      var ip = req.headers['x-forwarded-for'].split(',')[0] || // for running behind a proxy like NGiNX
     req.connection.remoteAddress || // for http requests
     req.socket.remoteAddress || // for http requests
     req.connection.socket.remoteAddress; // for https requests
     var info = {
         'ipaddress': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);
    });
}; 
