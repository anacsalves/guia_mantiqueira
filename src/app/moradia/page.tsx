"use client"

import React, { useState } from "react";
import BaseLayoutTelas from "../components/Generico/BaseLayoutTelas";
import Card from "../components/Generico/Card";
import Filtro from "../components/Generico/Filtro";

export default function Moradia() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [subCategoria, setSubCategoria] = useState("Todos");

  const categorias = ["Todos", "Casas", "Pensões/Kitnets"];
  const subCategorias = ["Todos", "Aluguel", "Venda"];

  return (
    <BaseLayoutTelas
      title="Moradia"
      description="Repúblicas, apartamentos, kitnets e pensões — opções para estudantes, famílias e turistas. Escolha o lar que combina com seu estilo de vida e sua necessidade."
    >
      <Filtro
        categorias={categorias}
        subCategorias={subCategorias}
        onSearch={setQuery}
        onCategoriaChange={setCategoria}
        onSubCategoriaChange={setSubCategoria} 
        buttonText={"Anuncie sua vaga"}
      />

      {/* Sessão de Casas */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Casas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Aluguel"
            description="CEP: 00000-000. Rua das Flores, 123."
            price="R$ 1500,00"
          />
          <Card
            imageSrc="/assets/img/casa.png"
            title="Venda"
            description="CEP: 00000-000. Rua das Flores, 123."
            price="R$ 1200,00"
          />
        </div>
      </section>

      {/* Sessão de Kitnets */}
      <section>
        <h2 className="text-xl font-bold mb-4">Pensões/Kitnets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Pensão das Moças"
            description="CEP: 00000-000. Rua das Flores, 123."
            price="R$ 900,00 - R$ 1500,00"
          />
        </div>
      </section>
    </BaseLayoutTelas>
  );
}
