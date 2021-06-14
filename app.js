const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine  EJS
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));  // makes static files accessible to public

// middleware logs dev info
app.use(morgan('dev'));

app.get('/', (req, res) =>  {
    //res.send('<p>home page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title:"Home", blogs });   // changes the root to dirname
});                                                          // express already sets the response type & status

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>')
    res.render('about', { title:"About" });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title:"Create Blog" });
})

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})


// 404 status
app.use((req, res) => {         // fires for anything ; should be in the bottom
    
    res.status(404).render('404', {title:"404"});
});