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
const user1=new User({name:"John",email:"john@gmail.com",age:25});
const user2=new User({name:"Jane",email:"jane@gmail.com",age:30});
//save the data into collection
// user1.save();
// user2.save();
//as save methode is also asynchronous so we can use promise to handle the result of the save method
user1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{console.log(err);});
user2.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{console.log(err);});

//inserting multiple documents in the collection
User.insertMany([
    {name:"Alice",email:"alice@gmail.com",age:28},
    {name:"Bob",email:"bob@gmail.com",age:32},
    {name:"Charlie",email:"charlie@gmail.com",age:35},
    {name:"Diana",email:"diana@gmail.com",age:29}
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});