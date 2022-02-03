//1-import express
const express = require('express');
//2-initialization app
const app = express();
//3-create the Port 
const port = 3000
//5-create middelware
const verifDate = (req,res,next) =>{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday'];
    let hours = new Date().getHours();
    days [new Date().getDay()] !== 'Saturday'&&  days[new Date().getDay()] !=='Sunday' && hours >9 && hours<23 ?
    next()
    : res.send('<h1>come back on working hours</h1>')
}
//6-using the middelware 
app.use(verifDate)

//7- routing middelware
app.use(express.static("Public"))
//4- create the server 
app.listen(port , (err)=> err? console.log (err):console.log(`server is now listening on ${port}`))


