// controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    // const { name ,username, password } = req.body;
    const { firstName, lastName, username, email, password } = req.body;

    

    // Check if user already exists
    const existingUserName = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUserName) {
      return res.status(400).json({ message: 'UserName already exists' });
    }
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ firstName, lastName, email, username, password: hashedPassword });

    await newUser.save();

    // Create a JWT token
    const token = jwt.sign({ id: newUser._id }, 'your-secret-key', {
      expiresIn: 3600, // Token expires in 1 hour
    });

    res.json({ 
      success : true,
      message : "User Registration Successfull",
      token, 
      user: { id: newUser._id, username: newUser.username, name : newUser.name } });

} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Username' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Password' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, 'your-secret-key', {
      expiresIn: 3600, // Token expires in 1 hour
    });

    res.json({
      success: true,
       token, 
       user: { id: user._id, username: user.username } 
      }); 
     } 
    catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
