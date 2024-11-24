"use client"

import { useState } from "react";
import BaseLayoutTelas from "../components/Generico/BaseLayoutTelas";
import Card from "../components/Generico/Card";
import Filtro from "../components/Generico/Filtro";
import Modal from "./Modal";


export default function Alimentacao() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [subCategoria, setSubCategoria] = useState("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal


  const categorias = ["Todos", "Restaurantes", "Padarias"];

  const openModal = () => setIsModalOpen(true); // Função para abrir o modal
  const closeModal = () => setIsModalOpen(false); // Função para fechar o modal

  return (
    <BaseLayoutTelas
      title="Alimentação"
      description="Descubra os melhores restaurantes, bares e cafés de Itajubá. Desde a tradicional comida mineira até pratos internacionais, escolha o lugar certo para suas refeições."
    >
      <Filtro
        categorias={categorias}
        onSearch={setQuery}
        onCategoriaChange={setCategoria}
        onSubCategoriaChange={setSubCategoria}
        buttonText={"Anuncie seu negócio"}
        onButtonClick={openModal}
      />
            <Modal isOpen={isModalOpen} onClose={closeModal} />


      {/* Sessão de Restaurantes */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Restaurantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Restaurante Bom de Prato"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      {/* Sessão de Cafeterias */}
      <section>
        <h2 className="text-xl font-bold mb-4">Cafeterias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Café com Pão"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>
    </BaseLayoutTelas>
  );
}
