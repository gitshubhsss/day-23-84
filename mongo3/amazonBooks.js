const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
main().then(()=>{
    console.log("success connection");
}).catch((err)=>{
    console.log(err);
});

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"price is too low for amazon selling"],
        default:10
    },
    discount:{
        type:Number,
        default:0
    },
    catagory:{
        type:String,
        enum:["fiction","nonfinction"]
    },
    genre:[String]
});

const Book=mongoose.model("Book",bookSchema);

// let book2=new Book({
//     title:"the last time",
//     author:"alex ",
//     price:189,
//     catagory:"nonfinction",
//     genre:["comics","fiction","non-fiction"]
// })

// book2.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

Book.findByIdAndUpdate("666ee7c4bd9c23e4eb546847",{price:-1},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})