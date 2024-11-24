import React, { useState } from "react";
import CardsInicio from "./CardsInicio";
import ModalAnuncie from "../Generico/ModalAnuncie"
import Modal from "../Generico/Modal";
import casa from "../../../assets/img/casa.png"; // Caminho correto para imagens no Next.js

export default function SessoesTelaInicial() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="py-8">
        {/* Título da Sessão */}
        <h1 className="font-futuraMedium font-medium text-green-dark text-3xl mb-2">
          Moradia
        </h1>
        <p className="text-gray-dark mb-4 text-xl">
          Encontre a moradia ideal para você.
        </p>
        <CardsInicio imageSrc={casa} title="Casas" />
      </section>

      <section className="py-8">
        <h1 className="font-futuraMedium font-medium text-green-dark text-3xl mb-2">
          Alimentação
        </h1>
        <p className="text-gray-dark mb-4 text-xl">
          Explore os melhores restaurantes e cafés de Itajubá.
        </p>
        <CardsInicio imageSrc={casa} title="Casas" />
      </section>

      <section className="py-8">
        <h1 className="font-futuraMedium font-medium text-green-dark text-3xl mb-2">
          Educação e Saúde
        </h1>
        <p className="text-gray-dark mb-4 text-xl">
          Veja as melhores escolas e hospitais da região.
        </p>
        <CardsInicio imageSrc={casa} title="Casas" />
      </section>

      {/* Botão fixo no canto inferior */}
      <button
        onClick={handleOpenModal}
        className="fixed bottom-4 right-4 bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Anuncie sua vaga
      </button>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal} />

      <div className="flex justify-center mt-8">
  <button
        onClick={handleOpenModal}
        className="px-6 py-2 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
  >
    Ver casa
    <Modal isOpen={modalOpen} onClose={handleCloseModal} />

  </button>
</div>

    </>
  );
}
