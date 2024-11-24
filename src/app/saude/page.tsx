"use client"

import React, { useState } from "react";
import BaseLayoutTelas from "../components/Generico/BaseLayoutTelas";
import Filtro from "../components/Generico/Filtro";
import Card from "../components/Generico/Card";

export default function Saude() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categorias = ["Todos", "Hospitais", "Clínicas", "Planos de Saúde", "UBS"];

  return (
    <BaseLayoutTelas
      title="Saúde"
      description="Conheça os hospitais, clínicas, unidades e serviços de saúde de Itajubá. Aqui você encontra informações úteis para cuidar do que é mais importante."
    >
      {/* Filtro */}
      <Filtro
        categorias={categorias}
        onSearch={setQuery}
        onCategoriaChange={setCategoria}
        buttonText="Anuncie sua clínica"
      />

      {/* Conteúdo Filtrado */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Hospitais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Hospital Escola"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Clínicas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Clínica Odonto"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Planos de Saúde</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Unimed"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">UBS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="UBS Central"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>
    </BaseLayoutTelas>
  );
}
