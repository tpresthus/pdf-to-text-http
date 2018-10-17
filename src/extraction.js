var extract = require('pdf-text-extract');

var handleFile = function(filePath, callback) {
  extract(filePath, { splitPages: false }, callback);
};
