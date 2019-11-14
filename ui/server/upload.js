const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();
  const fstream = '';
  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    const __dirname = '/Users/kinshu/Documents/TCS Full Stack/HackathonFullStackTCS/ui/uploaded-file/';
    console.log('file', file.name);
    console.log('path', file.path);
    const readStream = fs.createReadStream(file.path);
    fstream = fs.createWriteStream(__dirname + file.name);
  });
  form.on('end', () => {
    
    res.json();
  });
  form.parse(req);
  form.pipe(fstream);
};
