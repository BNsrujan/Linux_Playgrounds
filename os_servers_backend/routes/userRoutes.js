// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_here';

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get("/getAccessToken",async function(req,res){
    console.log(req.query.code);
 
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
 
    await fetch("https://github.com/login/oauth/access_token" + params,{
        method :"POST",
        headers : {
            "Accept" : "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        res.json(data);
    });                   
})

router.get("/getUserata", async function(req,res){
    req.get("Authorization");
    await  fetch("https://api.github.com/user",{
        method:"GET",
        headers : {
            "Authorization" : req.get("Authorization") 
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        res.json(data);
    })
})


module.exports = router;
