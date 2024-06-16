//require the package
const mongoose=require("mongoose");


async function main(){
    //conent nodejs with mongodb using mongoose.connecft
    await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
}
main().then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("connection failure");
});

//defining the schema 
const userSchema=new mongoose.Schema({
    username:String,
    content:String,
    likes:Number,
    followers:Number
});

const User =mongoose.model("User",userSchema);

// User.insertMany([
//     {username:"aashish",content:"vague in obejctive can cause to a faluire",likes:88,followers:545},
//     {username:"pavanranjane_",content:"if you give so much priority to somesome they will start loosing interest in you",likes:5456,followers:57},
//     {username:"tanmayShinde",content:"the magic you are looking for is in the work you are avoiding",likes:87,followers:57}
  
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findById("666ed399f0a88176eb785d32").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateOne({username:"pavanranjane_"},{followers:896565}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate({_id:"666ed399f0a88176eb785d32"},{content:" i have taken 500 rupees from shubham "},{new:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.deleteOne({username:"pavanranjane_"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({}).then((data)=>{
//     console.log(data);
// }).then((err)=>{
//     console.log(err);
// });

// User.deleteOne({username:"aashish"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.deleteMany({followers:{$lt:60}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

User.findByIdAndDelete({_id:"666ed399f0a88176eb785d31"}).then((res)=>{
    console.log(res);
}).then((err)=>{
    console.log(err);
})