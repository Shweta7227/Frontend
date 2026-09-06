const express = require("express");
const app = express();

const path = require("path");

const Chat = require("./models/chat");
const methodOverride=require("method-override");
// MongoDb connection:)

const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);

    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chitchat");
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
//by that express can understand and deal wth output:)
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//Routing :)

app.get("/", (req, res) => {
    res.send("On working route");
});

// let chat1 = new Chat({
//     from:"Shweta",
//     to:"Shubha",
//     message:"Hello",
//     created_at: new Date() //time according to UTC 
// });
//  chat1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


//Index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find({})
        .then((chats) => {
            // console.log(chats);
            // res.send("working");
            res.render("index.ejs", { chats });
        })
        .catch((err) => {
            console.log(err);
        });
});

//New Route
// 1.To render the new form
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

//2.after posting confirmation
app.post("/chats", async (req, res) => {
    //store the data into respective form

    // let {sender, msz, reciever}=req.body;    WE CAN"T TAKE DIFF NAME OF PARAMETERS
    try {
        let { from, message, to } = req.body;
        let cht = new Chat({
            from: from,
            message: message,
            to: to,
            created_at: new Date(),
        });
        await cht.save()
        console.log("Chat saved:", cht);

        res.redirect("/chats");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }

});
//Update  message
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} =req.params; //take id from parameter
    //here we are getting whole chat find by id
    let chat= await Chat.findById(id);
    //whole doc is sent on edit page:
    res.render("edit.ejs",{chat});
})
app.put("/chats/:id",async (req,res)=>{
    try{
        let {id} =req.params;
        console.log("id is: ",id);
        //beacuse message in >>>res.body.msz
        let {msz:newMsg} = req.body;
        console.log("Updated message",newMsg);
        //search that id and then save that message (now newMsg have actual new msg but we hhve to store it in message beacuse of db have this name key) 
        let chat=await Chat.findByIdAndUpdate(id, {message:newMsg},{runValidators:true , new: true});
        console.log(chat);
        res.redirect("/chats");
    }catch(err){
        console.log("Something went wrong!!");
        console.log(err);
    }
    
});

//delete api
app.delete("/chats/:id", async(req,res)=>{
    try{
        let {id}=req.params;
        let chat= await Chat.findByIdAndDelete(id);
        console.log(chat);
        res.redirect("/chats");
    }catch(err){
        console.log(err);
        console.log("Something went wrong!!");
    }
   
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});