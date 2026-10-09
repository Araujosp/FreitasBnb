import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex min-h-[calc(100svh-80px)] items-center justify-center p-4">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça Seu Login</h1>

        <form className="flex w-full flex-col gap-2">
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2 transition hover:shadow-md"
            placeholder="Digite seu e-mail"
          />

          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2 transition hover:shadow-md"
            placeholder="Digite sua senha"
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full border border-gray-300 bg-primary-400 px-4 py-2 font-bold text-white transition hover:shadow-md"
          >
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/register" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;