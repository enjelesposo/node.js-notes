const fs = require('fs');

const readStream = fs.createReadStream('./docs/streamdata.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/writestream.txt')

/*readStream.on('data', (chunk) => {          // listens to an event where a new chunk of data is received
    console.log('...NEW CHUNK')
    console.log(chunk);
    
    writeStream.write('\n NEW CHUNK \n');   
    writeStream.write(chunk);       
        
})*/

// piping

readStream.pipe(writeStream);