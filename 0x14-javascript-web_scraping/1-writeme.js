#!/usr/bin/node
// writes a string to a file
const fs = require('fs');
const argv = process.argv;

fs.writeFile(argv[2], argv[3], 'utf-8', (err, data) => {
  if (err) { console.log(err); }
});
