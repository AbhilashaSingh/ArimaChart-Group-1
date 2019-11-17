'use strict';
const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();
  var fstream = '';
  var readStream = '';
  form.on('file', (field, file) => {
    let rawdata = fs.readFileSync('config.json');
    let student = JSON.parse(rawdata);
    readStream = fs.createReadStream(file.path);
    console.log(student.filePath);
    fstream = fs.createWriteStream(student.filePath);
  });
  form.on('end', () => {
    readStream.pipe(fstream);
    res.json();
  });
  form.parse(req);
};
