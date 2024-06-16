const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/employee");
}
main()
  .then(() => {
    console.log("success connection");
  })
  .catch((err) => {
    console.log(err);
  });

const employeeSchema = new mongoose.Schema({
  e_id: {
    type: Number,
    unique: true,
    required: true,
  },
  ename: {
    type: String,
    required: true,
  },
  sallary: {
    type: Number,
    min: 25000,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);


Employee.findByIdAndDelete("666efa7d789176433178ada9").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// Employee.findByIdAndUpdate("666efa13126c51ef10dab485",{sallary:5},{runValidators:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// Employee.insertMany([
//     {e_id:1,ename:"shubham ranjnae",sallary:50000}
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.errors);
// })

// let emp=new Employee({
//     e_id:5,
//     ename:"abhishek",
//     sallary:82045
// })

// emp.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error",err);
// })

