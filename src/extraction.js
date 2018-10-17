var extract = require('pdf-text-extract');
var request = require('request');
var fs = require('fs');

var downloadFile = function(url, callback) {
  // TODO: Generate random filename
  var filePath = "/tmp/foo.pdf";
  var file = fs.createWriteStream(filePath);

  var sendReq = request.get(url);

  sendReq.on('response', function(response) {
    if(response.statusCode != 200)
      return callback(response.statusCode);
  });

  sendReq.on('error', function(err) {
    fs.unlink(filePath);
    return callback(err.message);
  });

  sendReq.pipe(file);

  file.on('finish', function() {
    file.close(callback);
  });

  file.on('error', function() {
    fs.unlink(filePath);
    return callback(err.message);
  });
};

var handleFile = function(filePath, callback) {
  extract(filePath, { splitPages: false }, callback);
};
