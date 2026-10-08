import React from "react";
import logo from "../../assets/FreitasBnb.png";

const Header = () => {
  return (
    <header className="shadow-md border-b border-gray-100">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        
        {/* 1. Logo */}
        <div className="w-20 h-20 flex items-center">
          <img
            src={logo}
            alt="Logo FreitasBnb"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>

        {/* 2. Barra de pesquisa */}
        <div className="flex items-center border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer text-sm font-medium">
          <p className="pr-4 border-r border-gray-300">
            Qualquer lugar
          </p>
          <p className="px-4 border-r border-gray-300">
            Qualquer Semana
          </p>
          <p className="px-4  font-normal">
            Hóspedes
          </p>

          {/* Ícone de pesquisa */}
          <div className="bg-rose-500 rounded-full p-2 text-white ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* 3. Seção do Perfil (Menu + Usuário) */}
        <div className="flex items-center gap-4">
          

          {/* Botão de Menu e Avatar */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-full py-1.5 px-3 shadow-sm hover:shadow-md transition cursor-pointer">
            {/* Ícone do menu (Hambúrguer) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* Ícone do usuário */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-semibold cursor-pointer hidden md:block">
            Araujoosp
          </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;