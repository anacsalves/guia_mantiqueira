// components/Generico/Modal.tsx
import { useState } from "react";
import Image from "next/image";
import casa from "../../assets/img/casa.png"

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
        <h2 className="text-xl font-semibold text-center text-green-dark">Aluguel</h2>
        <div className="flex flex-row">
            <Image src={casa} alt="" className="w-60"/>
            <div className="flex flex-col">
            <div className="flex flex-row space-x-10">
            <p className=" text-lg"><strong>R$ 1300,00</strong></p>
                    <p><strong>Condomínio:</strong> isento</p>
                    <p><strong>IPTU:</strong> isento</p>
            </div>
            <div className="flex flex-col">
            <p><strong>50 m² | 2 quartos | 1 banheiro</strong></p>
                    <p><strong>Aceita pets | 1 vaga | Portão eletrônico</strong></p>
            </div>
            </div>
        </div>
        <div className="flex flex-row space-x-20">
            <div>
                <p><strong>Responsável:</strong></p>
                <p> Julberto da Laje</p>
                <p>(00) 00000-0000</p>
                <p><strong>Endereço:</strong></p>
                <p> Rua das Flores, 123 - Bairro Pinheiros</p>
            </div>
            <div className="">
                <p>Descrição</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>

        </div>
        
        <div>          
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Ver no mapa
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
