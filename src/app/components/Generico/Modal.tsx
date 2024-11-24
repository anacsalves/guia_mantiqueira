// components/Generico/Modal.tsx
import { useState } from "react";
import Image from "next/image";
import casa from "../../../assets/img/casa.png"
import relogio from "../../../assets/img/Frame.png"

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-2xl"
        >
          &times;
        </button>
        
        <h2 className="text-xl font-semibold text-center text-green-dark">Restaurante</h2>

        <div className="flex flex-row space-x-8 text-gray-700">
            <div className="flex flex-col">
                <Image src={casa} alt="" className="w-72"/>
                <p className="text-green-regular flex"> <Image src={relogio} alt=""/> Aberto agora</p>
                
                <p>Endereço:</p>
                <p>CEP: 00000-000. Rua das Flores, 123 - Bairro Pinheiros. </p>
                <button className="bg-green-500 text-white rounded hover:bg-green-600 transition">
            Ver no mapa
          </button>
            </div>
            
            <div className="flex flex-col max-w-72 space-y-4 text-gray-700">
                <p className="text-black"><strong>Faixa de preço:</strong></p><p> R$100 - R$250</p>
                <p className="text-black"><strong> Descrição:</strong></p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p className="text-black"><strong> Telefone:</strong></p>
                <p className="text-black"><strong> E-mail:</strong></p>
                <p className="text-black"><strong> Site:</strong></p>


            </div>

        </div>

        
        <div>          
          
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
