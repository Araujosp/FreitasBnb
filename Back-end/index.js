import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import User from "./models/User.js";

const app = express();
const { PORT, MONGO_URL } = process.env; //Desustruturação

app.listen(PORT, () =>{
    console.log (`servidor esta rodando na porta ${PORT}`)
});

app.get('/users', async (req, res) =>{

    connectDb();
    const userDoc = await User.find();


    res.json('userDoc');
})