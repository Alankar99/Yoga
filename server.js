const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');

const mongoose=require('mongoose');
const CORS=require('cors');
// const userInfo=require('.userInfo');

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req , res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

//Setup database entities
const DB_LINK=`mongodb+srv://Alankar_99:Yogapassword123@user.sz8wtcx.mongodb.net/test`

//Middleware
app.use(CORS())
app.use(express.json())

//Setup database
mongoose.connect(DB_LINK,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Database connection successfull.')
}).catch((err)=>{
    console.log(err)
})


app.post('/' , (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;
    let date = req.body.date;
    let batch = req.body.batch;
    let upi = req.body.upi;

    


    res.send(
        `Name: ${name}
        Email: ${email}
        age: ${age}
        date: ${date}
        batch: ${batch}`)
});

app.listen(3000, ()=>
{
    console.log('listening on port 3000');
})