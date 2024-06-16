const express = require("express");
const app = express();
const port = 8080;
const path=require("path");

//requre the chat model from ./models/chats.js
const Chat=require("./models/chats.js");

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));


app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("connection failed");
});

//inserting the data in chats collecction

let chat1=new Chat({
    from:"shubham ranjane",
    to:"bhumika gawade",
    msg:"i am still love you",
    created_at:new Date()
})

chat1.save().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("connecting mysql with express js");
})