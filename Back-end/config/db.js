import "dotenv/config"
import mongoose from "mongoose";

const { PORT, MONGO_URL } = process.env; //Desustruturação


export const connectDb = async () => {

    try {
        await mongoose.connect(MONGO_URL);
        console.log('Conexão estabelecida com Sucesso!');
        
    } catch (error) {
        
        console.log('Erro ao tentar Conexão com o Banco de dados', error);
    }
}