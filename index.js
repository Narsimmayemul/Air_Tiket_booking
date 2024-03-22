const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config(); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {connection , userModule , fliteModule ,bookingModule} = require('./db')
const cookie = require('cookie');



// protect routes im adding here 

const protectRoute = async(req , res, next)=>{
    try {
        const token = req.cookies.jwt;
        // const token = "";
        if(!token){
            return res.status(401).send({error : "not Authorised  "})
        }
        const decoded = jwt.verify(token , process.env.Key);
        if(!decoded){
            return res.status(401).send({error : "not Authorised"})
        }
        const user = await userModule.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).send({error : "User not found here"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error from protect midleware   " , error)
        res.status(500).send(error.message)
    }
}





app.post("/api/register" , async(req , res)=>{
    const {name  , email , password} = req.body;
    try {
    if(!name || !email || !password){
        res.send('All filled required')
    }
    const avil = await userModule.find({email:email});
    if(avil.length !== 0){
        res.send('Email Alreday Exist')
    }else{
    const hash = bcrypt.hash(password , 6 , async function(err , hash){
        if(err){
            console.log(err)
        }else{
            await userModule.create({name:name , email:email , password: hash });
            res.status(201).send({name:name , email:email , password: password });
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
                const token = jwt.sign({userId : user._id} , process.env.Key);
                res.cookie('token' , token , {
                    maxAge : 15 * 24 * 60 * 60 * 1000, 
                    httpOnly : true ,
                    sameSite:"strict",
                    secure : process.env.NODE_ENV !== "development" 
                });
                res.status(201).send({message :'User Found' , token:token})
            }else{
                res.status(404).send(err + "user not found")
            }
        })
    } catch (error) {
        console.log('Error From login function   :'+error)
    }
})



app.get("/api/flights" , async(req , res)=>{
    try {
        const flites = await fliteModule.find();
        res.status(200).send(flites)
    } catch (error) {
        console.log("Error From get flites Function  :   "+error)
    }
})


app.get("/api/flights/:id" , async(req , res)=>{
    const id = req.params.id;
    try {
        const flites = await fliteModule.findById({id});
        res.status(200).send(flites);
    } catch (error) {
        console.log("Error From get flites Function  :   "+error)
    }
})


app.post("/api/flights" , protectRoute , async(req , res)=>{
    const {airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price} = req.body;
try {
    
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