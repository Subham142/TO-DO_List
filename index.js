const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose');

app.use(express.static('./assets'));

// extract styles and scripts for sub pages in layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



app.use(expressLayouts);

//Use express router
app.use('/',require('./routes/index'));

//set up views engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){

    if(err){
        console.log(`Error in running server :${err}`);
    }

    console.log(`server is running on port ${port}`);
});