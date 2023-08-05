import express from "express";
import connection from "./db.js"; 
import router from "./REST_Routes/userRoutes.js";

const app = express();
app.use(express.json()); // to convert into json format
app.use("/api/user", router);
connection();

app.listen(5500, ()=>{
    console.log("Server is running on port 5500");
})