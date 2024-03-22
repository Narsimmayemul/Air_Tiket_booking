const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config(); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {connection , userModule , fliteModule ,bookingModule} = require('./db')


app.get("/api/register" , async(req , res)=>{
    const {name  , email , password} = req.body;
    try {
    if(!name || !email || !password){
        res.send('All filled required')
    }
    const avil = await userModule.find({email:email});
    // console.log(avil)
    if(avil.length !== 0){
        res.send('Email Alreday Exist')
    }else{
    const hash = bcrypt.hash(password , 6 , async function(err , hash){
        if(err){
            console.log(err)
        }else{
            await userModule.create({name:name , email:email , password: hash });
            res.send({name:name , email:email , password: password });
            console.log('user created');
        }
    })
}
} catch (error) {
    console.log('error from post user function' , error);
}
})


app.post("/api/login" , async(req , res)=>{
    const {email , password} = req.body;
    const user = await userModule.findOne({email:email});
    console.log(user)
    const hashed = user.password;
    try {
         bcrypt.compare(password , hashed , function(err , result){
            if(result == true){
                console.log(result);
                const token = jwt.sign({userId : user._id} , process.env.Secrete_key);
                res.status(200).send({message :'User Found' , token:token})
            }else{
                
                res.status(404).send(err + "user not found")
            }
        })
    } catch (error) {
        
    }
})







const port = process.env.port
app.listen(port , ()=>{
    try {
        if(connection){
            console.log(`Connection started on ${port}`)
        }
    } catch (error) {
        console.log('error from connection ' + error)
    }
})