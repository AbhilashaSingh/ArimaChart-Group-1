const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();
  var fstream = '';
  var readStream = '';
  form.on('file', (field, file) => {
    const __dirname = '/Users/kinshu/Documents/TCS Full Stack/HackathonFullStackTCS/ui/uploaded-file/';
    readStream = fs.createReadStream(file.path);
    fstream = fs.createWriteStream(__dirname + file.name);
  });
  form.on('end', () => {
    readStream.pipe(fstream);
    res.json();
  });
  form.parse(req);
};
