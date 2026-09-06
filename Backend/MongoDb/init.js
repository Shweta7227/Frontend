const mongoose= require("mongoose");
const Chat=require("./models/chat");

main()
    .then((res)=>{
        console.log("Connection successful");
    })
    .catch((err)=>{
        console.log(err);

    })
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chitchat");
}

let chats = [
    {
        from:"Monu",
        to:"Sattu",
        message:"Send me my photos",
        created_at: new Date() 
    },
     {
        from:"Sattu",
        to:"Ritu",
        message:"how do i look in this picture?",
        created_at: new Date() 
    },
     {
        from:"Ritu",
        to:"Shweta",
        message:"Hello Shweta!!",
        created_at: new Date() 
    }, {
        from:"Shubha",
        to:"Shweta",
        message:"Hii Shweta!!",
        created_at: new Date() 
    }, {
        from:"Sattu",
        to:"Monu",
        message:"Sure, here are your photos.",
        created_at: new Date() 
    }, {
        from:"Shweata",
        to:"Ritu",
        message:"Hiiii",
        created_at: new Date() 
    }, {
        from:"Manu",
        to:"Shweta",
        message:"Please send me your notes",
        created_at: new Date() 
    }, {
        from:"Akash",
        to:"Anita",
        message:"Send me Shweta's notes",
        created_at: new Date() 
    }, {
        from:"Monu",
        to:"Sattu",
        message:"Thanks for the photos!",
        created_at: new Date() 
    },
       
];

Chat.insertMany(chats);