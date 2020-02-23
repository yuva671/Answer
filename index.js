const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const mongodb=require('mongodb');
const dbUrl="mongodb://localhost:27017";
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const jwt=require('jsonwebtoken');
const fs=require('fs');

app.post('/register',function(req,res){
    mongodb.connect(dbUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      },function(err,client){
        if(err) throw err;
        var db=client.db('PolDB');
        db.collection('users').insertOne({UserName:req.body.UserName,Email:req.body.Email,Password:req.body.Password,MobileNo:req.body.MobileNo},function(err,data){
            if(err) throw err;
            res.status(200).json({
                message:'Successfully registered'
            })
            client.close();
        })
    })
})

app.post('/file',function(req,res){
    mongodb.connect(dbUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      },function(err,client){
        if(err) throw err;
        var db=client.db('PolDB');
        db.collection('files').insertOne({File:req.body.file},function(err,data){
            if(err) throw err;
            res.status(200).json({
                message:'Successfully registered'
            })
            client.close();
        })
    })
})





app.post('/login',function(req,res){
    mongodb.connect(dbUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      },function(err,client){
        if(err) throw err;
        var db=client.db('PolDB');
        var result=db.collection('users').findOne({Email:req.body.Email})
        result.then(function(userData){
            if(userData!==null){
                if(req.body.Password==userData.Password){
                   
                        jwt.sign({
                            exp:Math.floor(Date.now()/1000)+(60*60),
                            data:'foobar'
                        },'dsbcfdsjfbsjkbh',function(err,token){
                            if(err) throw err;
                            res.json({
                                message:'Success',
                                token:token
                            })
                        })
                    }else{
                        res.status(403).json({
                            message:'Wrong Password'
                        })
                    }
                }
                else{
                    res.json({
                        message:'No email'
                    })
                }
                client.close();
            
        })

    })
})




    app.listen(8000);

