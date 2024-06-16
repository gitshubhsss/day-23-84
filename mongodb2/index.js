//requiring mongoose package
const mongoose=require("mongoose");
const { stderr } = require("process");
const { domainToASCII } = require("url");

//connecting mongodb with node js using connect method
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/library");
}
//promise returned by the funtion
main().then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("connection failed");
});

//defining the student schema

const studentSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    age:Number
});

const adminSchema=new mongoose.Schema({
   username:String,
   password:Number
});


const Student=mongoose.model("Student",studentSchema);
const Admin=mongoose.model("Admin",adminSchema);


// Student.insertMany([
//     {name:"atharv sudaame",email:"atharvsudame78@gmail.com",mobile:7808588521,age:30},
//     {name:"sundar pichai",email:"sundarpichai@gmail.com",mobile:7507380653,age:22},
//     {name:"bhumika gawade",email:"bhumikagawade@gmail.com",mobile:8390343371,age:22}
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// Admin.insertMany([
//     {username:"admin@123",password:7781}
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// let student1=new Student({name:"monali renuse",email:"monalirenuse@gmail.com",mobile:858698973440});

// student1.save();

// Student.find({}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// Student.findById("666ea341d71dd7ecb4ad5830").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });


// Student.find({age:{$gt:22}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// Student.updateMany({age:30},{name:"tanaji ranjane",email:"tanajiranjane78@gmail.com"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Student.find({age:30}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// Admin.updateMany({username:"admin@123"},{password:5687}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Admin.find({}).then((data)=>{
    console.log(
        data
    );
}).catch((err)=>{
    console.log(err);
})