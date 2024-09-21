import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app =express();

const port =process.env.PORT|| 3000;

app.get('/',(req,res)=>{
  res.send("Hello mr david")
  
});

app.get('/jokes',(req,res)=>{
  const jokes =[
    {
      id:1,
      title:"A joke",
      content:'This is a joke'
    },
    {
      id:2,
      title:"Another joke",
      content:'This is a 2nd joke'
    },
    {
      id:3,
      title:"3rd joke",
      content:'This is a 3rd joke'
    },
  ]

  res.send(jokes);
})


app.listen(port,()=>{
  console.log(`server is running http://localhost:${port}`)
})