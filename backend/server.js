const express = require('express');
const app = express();
const port = 9000;

app.get("/",(req,res)=>{
    res.send("Hey I am live !!");
})

app.listen(port,()=>{
    console.log("Listning . . . ");
})