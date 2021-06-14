const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {            // create a server
    
    // lodash
    const num = _.random(0, 20);
    console.log(num);
    
    // set header content type
    res.setHeader('Content-Type', 'text/html'); // set the type of response
    
    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');   // re-directs to /about
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // sending an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })

});



server.listen(3000, 'localhost', () => {    // listen for a requestc
    console.log("listening for request");
})




// Browser ------ request ------>               
//         <----- response ------ Server


// process of sending Response
//  - set content type
//  - write the content
//  - end the response to send


// status code 
// 200 - ok
// 301 - Resource moved 
// 404 - Not found 
// 500 - internal server error

// npm's for node.js
// - nodemon
// - express