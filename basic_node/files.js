const fs = require('fs');


// reading files
fs.readFile('./docs/readMe.txt', (err, data) => {        //  async
    if (err){
        console.log(err);
    }
    
    console.log(data.toString());  // data needs to be converted to string 
});

console.log('me go first >:(')


// writing files
fs.writeFile('./docs/writeMe.txt', 'hullo, world!', () => {     // can be used to rewrite content of an existing file
    console.log('file was written.')
})


// directories
if(!fs.existsSync('./assets')){         // checks if folder exist or not
    fs.mkdir('./assets', (err) => {     // mkdir --> make directory
        if (err){
            console.log(err);
        }
    
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {    // rmdir --> remove directory
        if (err){
            console.log(err);
        }

        console.log('folder deleted')
    });
}


// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
