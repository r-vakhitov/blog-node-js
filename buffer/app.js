const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('docs/text2.txt');
const compreessStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//   writeStream.write('\n---CHUNK START---\n');
//   writeStream.write(chunk);
//   writeStream.write('\n---CHUNK END---\n');
// });

const handleError = () => {
  console.log('ERROR');
  readStream.destroy();
  writeStream.end('Finished with error...');
;}
readStream
  .on('error', handleError)
  .pipe(compreessStream)
  .pipe(writeStream)
  .on('error', handleError);