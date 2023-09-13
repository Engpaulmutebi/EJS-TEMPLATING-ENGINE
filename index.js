const express = require('express');
const app = express();
const PORT = 3001;
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/m', (req, res) => {
    // res.status(200).send('Welcome');
    res.render('index', {pageTitle: 'Home Page'});
});

app.get('/contact', (req, res) => {
    // res.status(200).send('Welcome');
    res.render('contact', {pageTitle: 'contact Page'});
});

app.listen(PORT,()=>{
    console.log('listening on $(PORT)');
});