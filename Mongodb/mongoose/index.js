const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(() => {
    console.log("connection success");
  })
  .catch(() => {
    console.log("connection failure");
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1=new User({
//     name:"pavan ranjane",
//     email:"pavanranjane15@gmail.com",
//     age:20
// });

// const user2 = new User({
//   name: "ashish ranjane",
//   email: "ashishranjane8@gmail.com",
//   age: 20,
// });
// user2
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "sandesh", email: "SandeshSanas@gmail.com", age: 22 },
//   { name: "raj", email: "rajdhole@gmail.com", age: 25 },
//   { name: "puskraj", email: "pushkraj@gmail.com", age: 23 },
// ]);

// // User.find({})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gt: 22 } })
//   .then((data) => {
//     console.log(data);
//   })
//   .then((err) => {
//     console.log(err);
//   });

// User.findById("666e94ad031a3fabd5e11957").then((data)=>{
//     console.log(data);
// }).then((err)=>{
//     console.log(err);
// })

// User.updateMany({age:23},{$set:{name:"age23"}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateOne({name:"age23"},{$set:{name:"pushkraj gaikwad"}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

User.find({}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})