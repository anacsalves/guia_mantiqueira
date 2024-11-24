"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "../../assets/img/Logo-apenas-imagem.png";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path: string) => {
    router.push(path);
    setMenuOpen(false); 
  };

  return (
    <header className="w-full bg-green-light shadow-md">
      <nav className="container mx-auto flex items-center justify-between h-24 px-4">
        {/* Logotipo */}
        <div
          onClick={() => navigateTo("/")}
          className="cursor-pointer flex items-center gap-4"
        >
          <Image src={logo} alt="Imagem circular com montanhas que remetem a Itajubá" className="w-24"/>
          <h1 className="font-carolloMedium text-[28px]">Guia da Mantiqueira</h1>
        </div>

        {/* Botão de menu hambúrguer para telas pequenas */}
        <button
          className="md:hidden block text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:relative left-0 w-full md:w-auto bg-green-light md:bg-transparent md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-600 p-4 md:p-0`}
        >
          <li>
            <button
              onClick={() => navigateTo("/")}
              className="hover:text-green-dark focus:outline-none"
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/moradia")}
              className="hover:text-green-dark focus:outline-none"
            >
              Moradia
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/alimentacao")}
              className="hover:text-green-dark focus:outline-none"
            >
              Alimentação
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/educacao")}
              className="hover:text-green-dark focus:outline-none"
            >
              Educação
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/saude")}
              className="hover:text-green-dark focus:outline-none"
            >
              Saúde
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
