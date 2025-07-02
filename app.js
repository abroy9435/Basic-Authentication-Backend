//requiring and setting things
require('dotenv').config();

const express= require('express');
const app= express();
const userModel = require("./models/user")

const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const path= require('path');
const cookieParser= require('cookie-parser');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ Connection Error:", err));

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res)=>{
    res.render('login')
})
app.get("/create-user",(req,res)=>{
    res.render("create");
});
app.post("/create", (req,res)=>{
    let {username, email, password, age} = req.body;
    
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password, salt,async (err, hash)=>{
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })
            
            let token = jwt.sign({email}, "shhhhhhhhhh")
            res.cookie("token", token);
            res.redirect("/successful-creation");        
        })
    })

    
})

app.get("/successful-creation",(req,res)=>{
    res.render('creation_success')
})

app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login",async (req,res)=>{
    let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.redirect("/e-re-login");
    

    bcrypt.compare(req.body.password, user.password, function(err, result){
        if(result){
            let token = jwt.sign({email: user.email}, "shhhhhhhhhh")
            res.cookie("token", token);
            res.redirect("/successful-login");
        }
        else res.redirect("/e-re-login");
    })
})

app.get("/e-re-login",(req,res)=>{
    res.render("login_error")
})

app.get("/successful-login",(req,res)=>{
    res.render('login_success')
})
app.get("/logout", (req,res)=>{
    res.cookie("token", "");
    res.render('loggedout');
})
app.listen(3000)
