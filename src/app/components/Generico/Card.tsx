import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

interface CardProps {
  imageSrc: string; // Caminho para a imagem
  title: string; // Título
  description: string; // Descrição
  price?: string; // Preço (opcional)
}

export default function Card({ imageSrc, title, description, price }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Modal */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}

      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        {/* Imagem */}
        <div className="w-full h-40 relative">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col bg-green-light p-4 gap-2">
          {/* Título e Preço */}
          <div className="flex justify-between">
            <h3 className="text-lg font-bold text-gray-700">{title}</h3>
            {price && <p className="text-green-dark font-bold">{price}</p>}
          </div>
          {/* Descrição */}
          <p className="text-sm text-gray-600">{description}</p>
          {/* Botão para abrir o modal */}
          <button
            onClick={openModal}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-center"
          >
            Ver Mais
          </button>
        </div>
      </div>
    </>
  );
}
