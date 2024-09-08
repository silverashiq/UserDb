const User= require("../models/User")

exports.getAllUsers= async (req, res) => {
    try{
        const users = await User.find();
        res.send(users)
    } catch (error){
        console.log(error);
    }
    
};

exports.createUser= async (req, res) => {
    try{
        const {firstName, lastName, userName, email, password, termsAccepted,} = req.body
        const user= new User({
            firstName,
            lastName,
            userName,
            email,
            password,
            termsAccepted,
            profilePicture: req.file.path
        })
        await user.save();
        return res.send(user);
    } catch (error){
        console.log(error);
    }
    
};