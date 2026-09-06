// const mongoose = require('mongoose');


// main()
//     .then(() => {
//         console.log("Connection successfully done of Amaze !!");
//     })
//     .catch(err => console.log(err));



// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/amaze");
// }


// const bookSchema = new mongoose.Schema({
//     title : {
//         type :  String,
//         required : true,
//     },
       
//     author : {
//         type : String, 
//     },
//     price : {
//         min : [5, "Price should be greater than 5"],
//         type : Number,
//     },
// });

// const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({title : "The Great Gatsby", author : "F. Scott Fitzgerald", price : 10.99});
// let book2 = new Book({title : "To Kill a Mockingbird", author : "Harper Lee", price : 12.99});

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// book2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Book.findByIdAndDelete({_id : "6a9bff450e090f94ab0f3e2e"})
// .then((res)=>{
//     console.log(res);   
// })
// .catch((err)=>{
//     console.log(err);
// });
// Book.find()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// let book3 = new Book({ title: "Wow", author : "me", price : "15.99"});
// book3.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// // updation done without checking constraints:)

// Book.findOneAndUpdate({author : "me"}, {price : 4.99 })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err);       
//     });


// // Updation done with checking constraints:
// Book.findOneAndUpdate(                                                
//     {author : "me"}, {price : 4.99 }, {runValidators : true}
// )
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err.errors.price.message);       
//     }); 
