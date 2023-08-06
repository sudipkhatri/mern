//logic
import userSchema from "../Schema/userSchema.js";
import bcrypt from "bcryptjs";
import moment from "moment";
import validator from "validator";

export const signUp = async (req, res, next) => {
  const { name, email, password, status } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "all field required." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "invalid email" });
  }

  let existUser; //check if the user exist in the database already
  try {
    existUser = await userSchema.findOne({ email }); //find email on db
  } catch (error) {
    console.log(error);
  }

  if (existUser) {
    return res.status(400).json({ msg: "user exists" }); //return
  }
  let newUser; // if the user does not exist lets create a new user
  const hashPassword = bcrypt.hashSync(password);
  const date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  try {
    // create a new user on schema/db
    newUser = new userSchema({
      name,
      email,
      password: hashPassword,
      status,
      dateCreated: date,
    });
    await newUser.save(); //save the user on database
  } catch (error) {
    return console.log(error);
  }

  return res.status(201).json({ msg: "user created", newUser });
};

export const getUsers = async (req, res, next) => {
  let allUsers;
  try {
    allUsers = await userSchema.find();
  } catch (error) {
    console.log(error);
  }
  if (!allUsers) {
    return res.status(404).json({ msg: "no users found" });
  }
  return res.status(200).json({ msg: "users", allUsers });
};

export const getUsersByID = async (req, res, next) =>{

    let id = req.params.id;
    let usersByID;
    try{
        usersByID = await userSchema.findById(id);
    }
    catch(error){
        console.log(error);  
        return res.status(400).json({ msg: "bad request" });
    }
    if(!usersByID){
        return res.status(404).json({msg: "user not found"});
    }
    return res.status(200).json({msg: "user found", usersByID});
}
