const express=require('express');
const app=express();
const PORT=4000;

//use express router
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(PORT,function(err) {
if(err) { 
    console.log(`Error running or PORT, ${err}`);
}
console.log(`Server is running on PORT : ${PORT}`);   //called as interpolation
});