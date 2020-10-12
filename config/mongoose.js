const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/deplopment');
 const db=mongoose.connection;

 db.on('error',console.error.bind(console,"Eroor in mongodb"));

 db.once('open',function(){
    console.log('connected to database');
 });

 module.exports =db;