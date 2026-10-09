import express from "express";
import "dotenv/config"

const app = express();
const { PORT, MONGO_URL } = process.env; //Desustruturação

app.listen(PORT, () =>{
    console.log (`servidor esta rodando na porta ${PORT}`)
});

app.get('/', (req, res) =>{
    res.json('olá mundo');
})