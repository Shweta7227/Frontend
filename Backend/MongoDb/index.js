//require the mongoose module
const mongoose = require('mongoose');

//calling of the main function to connect to the database
main()
//if the connection is successful then print the message in the console
.then(()=>{
    console.log("Connection successful");
})
//if the connection is not successful then print the error message in the console
.catch(err => console.log(err));
//async function to connect to the database
async function main(){
 await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//blueprint of the user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

//inserting one - one document in the collection 
// const user1=new User({name:"John",email:"john@gmail.com",age:25});
// const user2=new User({name:"Jane",email:"jane@gmail.com",age:30});
//save the data into collection
// user1.save();
// user2.save();
//as save methode is also asynchronous so we can use promise to handle the result of the save method
// user1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{console.log(err);});
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{console.log(err);});

//inserting multiple documents in the collection
// User.insertMany([
//     {name:"Alice",email:"alice@gmail.com",age:28},
//     {name:"Bob",email:"bob@gmail.com",age:32},
//     {name:"Charlie",email:"charlie@gmail.com",age:35},
//     {name:"Diana",email:"diana@gmail.com",age:29}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:30}})
//     .then((res)=>{
//         console.log(res[0].name); //as we get the two doc whose age is gt thn 30 , but here we asks to print the name of the first doc only so we use res[0].name
//     })
//     .catch((err)=>{
//     console.log(err);
// });

// User.findOne({age:{$gt:20}})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err);
//     });

// commonly use find by id:
// User.findById( {_id: "6a9ac9afdb9ae3e142ce49d5"})
//     .then((res)=>{
//         console.log("Name is: ",res.name);
//     })
//     .catch(err=>{
//         console.log(err);
//     });

//Update One :)

// User.updateOne({age:{$gt:30}},{$set:{age:36}})
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

//Update Many:)
// User.updateMany({age:{$gt:30}},{$set:{age:36}})
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// //Find and Update One:)
// User.findOneAndUpdate({name:"Alice"},{$set:{age:26}},{new:true})
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// //find by id and update that one :)
// User.findByIdAndUpdate({_id:"6a9acd6e3efd17a6ce1579ac"},{$set:{age:28}},{new:true})
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

//Delete One:)
// User.deleteOne({name:"Jam"
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// });

// //delete Many:)
// User.deleteMany({age:{$gt:50}})
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// });

// //find and delete one:)
// User.findOneAndDelete({age:{$gt:50}})
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// //find and delete by id :)
// User.findByIdAndDelete({_id:"6a9bf9041c592f61246ed63c"})
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })