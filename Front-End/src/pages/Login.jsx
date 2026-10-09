import React from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
    <section className="flex items-center">
      <div className=" mx-auto max-w-7xl  flex flex-col gap-4 p-8">
        
        <h1>Faça Seu Login</h1>

        <form action="">
            <input type="text" />
            <input type="text" />
            <button></button>
        </form>

        <p>Ainda não tem uma conta? <Link to='register'>Registre-se aqui!</Link> </p>

      </div>
    </section>
    )
}

export default Home