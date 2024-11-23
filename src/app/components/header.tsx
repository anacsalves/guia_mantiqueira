import Link from 'next/link';
import logo from "../../assets/img/Logo.png"
import Image from 'next/image';

export default function Header() {
	return (
            
             <header className="flex h-32 w-full bg-green-light shadow-md">
                <nav className="container mx-auto flex justify-between items-center p-4">
                  <Image src={logo} alt='logo com montanhas'/>
                  <ul className="flex space-x-6 text-gray-600">
                    <li><a href="#inicio" className="hover:text-green-dark">Início</a></li>
                    <li><a href="#moradia" className="hover:text-green-dark">Moradia</a></li>
                    <li><a href="#alimentacao" className="hover:text-green-dark">Alimentação</a></li>
                    <li><a href="#escolas" className="hover:text-green-dark">Escolas</a></li>
                    <li><a href="#saude" className="hover:text-green-dark">Saúde</a></li>
                  </ul>
                </nav>
              </header>
              

    )
}